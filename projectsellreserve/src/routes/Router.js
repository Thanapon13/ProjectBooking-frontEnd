import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Layout from "../layouts/layout";
import RoomReservePage from "../pages/RoomReservePage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/profile" },
      { path: "/admin" },
      { path: "/order" },
      { path: "/community" },
      { path: "/roomreservepage", element: <RoomReservePage /> }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
