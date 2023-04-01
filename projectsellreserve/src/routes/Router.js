import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Layout from "../layouts/layout";
import ProductRoomPage from "../pages/ProductRoomPage";
import ProfilePage from "../pages/Profile";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/admin" },
      { path: "/order" },
      { path: "/community" },
      { path: "/productroompage", element: <ProductRoomPage /> }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
