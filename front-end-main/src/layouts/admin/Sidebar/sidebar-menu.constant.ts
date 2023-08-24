import { UilBackpack, UilBill, UilUsersAlt } from "@iconscout/react-unicons";

const sidebarMenus = [
  {
    LeftIcon: UilUsersAlt,
    name: "Users",
    isDropdown: false,
    url: "/",
  },

  {
    LeftIcon: UilBackpack,
    name: "Produk",
    url: "products",
  },
  {
    LeftIcon: UilBill,
    name: "Orders",
    url: "orders",
  },
];

export default sidebarMenus;
