import DefaultDashboardLayout from "@layouts/admin";
import ErrorPage from "@layouts/error/ErrorPage";
import ProtectPage from "@layouts/protected/ProtectPage";
import ProtectPageVisitor from "@layouts/protected/ProtectPageVisitor";
import Dashboard from "@pages/admin/dashboard/Dashboard";
import Login from "@pages/login";
import LandingOrder from "@pages/visitor/orders/LandingOrder";
import DetailProductPage from "@pages/visitor/products/DetailProduct";
import ProductPage from "@pages/visitor/products/LandingProduct";
import { Navigate, RouteObject } from "react-router-dom";
export default function GetBrowserRoutes() {
  return [
    {
      path: "/",
      element: (
        <ProtectPage>
          <DefaultDashboardLayout />
        </ProtectPage>
      ),
      errorElement: <ErrorPage navigateTo="/" />,
      children: [
        {
          index: true,
          element: <Navigate to="users" />,
        },
        {
          path: "users",
          element: <Dashboard />,
        },
        {
          path: "products",
          element: <ProductPage />,
        },
        {
          path: "products/:productId",
          element: <div>main</div>,
        },
        {
          path: "products/add",
          element: <div>main</div>,
        },
        {
          path: "products/:productId/edit",
          element: <div>main</div>,
        },
      ],
    },
    {
      path: "visitor",
      element: (
        <ProtectPageVisitor>
          <DefaultDashboardLayout />
        </ProtectPageVisitor>
      ),
      errorElement: <ErrorPage navigateTo="/visitor" />,
      children: [
        {
          index: true,
          element: <Navigate to="products" />,
        },
        {
          path: "products",
          element: <ProductPage />,
        },
        {
          path: "products/:productId",
          element: <DetailProductPage />,
        },
        {
          path: "orders",
          element: <LandingOrder />,
        },
      ],
    },
    {
      path: "/login",
      index: true,
      element: <Login />,
      errorElement: <ErrorPage navigateTo="/login" />,
    },
  ] as RouteObject[];
}
