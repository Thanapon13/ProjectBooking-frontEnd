import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Layout from "../layouts/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      { path: "/login" },
      { path: "/register" },
      { path: "/profile" },
      { path: "/admin" },
      { path: "/order" },
      { path: "/community" }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
