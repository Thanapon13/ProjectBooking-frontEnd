import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Layout from "../layouts/layout";
import ProfilePage from "../pages/ProfilePage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import PaymentBooking from "../pages/PaymentBooking";
import OrderHistory from "../pages/OrderHistoryPage";
import ProductRoomPage from "../pages/ProductRoomPage";
import ProtectedRout from "../features/auth/ProtectedRout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/profile",
        element: (
          <ProtectedRout>
            <ProfilePage />
          </ProtectedRout>
        )
      },
      { path: "/admin" },
      { path: "/order" },
      { path: "/community" },
      {
        path: "/productroompage",
        element: <ProductRoomPage />
      },
      {
        path: "/cartpage",
        element: (
          <ProtectedRout>
            <ShoppingCartPage />
          </ProtectedRout>
        )
      },

      {
        path: "/orderhistory",
        element: (
          <ProtectedRout>
            <OrderHistory />
          </ProtectedRout>
        )
      }
    ]
  },
  {
    path: "/paymentbooking",
    element: <PaymentBooking />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
