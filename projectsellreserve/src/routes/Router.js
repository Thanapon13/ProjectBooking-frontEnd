import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  { path: "/login" },
  { path: "/register" },
  { path: "/profile" },
  { path: "/admin" },

  { path: "/order" },
  { path: "/communityPage" },
  {}
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
