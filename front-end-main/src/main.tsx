import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
import { store } from "./redux/store";
import GetBrowserRoutes from "./components/utils/Router";
import theme from "@lib/theme/extendedTheme";

axios.defaults.withCredentials = true;

const router = createBrowserRouter(GetBrowserRoutes());
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
