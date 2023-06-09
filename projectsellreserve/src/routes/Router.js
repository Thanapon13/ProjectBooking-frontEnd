import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Layout from "../layouts/layout";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import OrderHistory from "../pages/OrderHistoryPage";
import ProductRoomPage from "../pages/ProductRoomPage";
import ProtectedRout from "../features/auth/ProtectedRout";
import RegisterProductPage from "../pages/RegisterProductPage ";
import ProfilePage from "../pages/ProfilePage";
import PaymentOrderPage from "../pages/PaymentOrderPage";
import AdminPage from "../pages/AdminPage";

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
      { path: "/order" },
      { path: "/community" },
      {
        path: "/productroompage/:roomId",
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
      },

      {
        path: "/registerproductPage",
        element: (
          <ProtectedRout>
            <RegisterProductPage />
          </ProtectedRout>
        )
      },
      {
        path: "/paymentOrderPage",
        element: <PaymentOrderPage />
      },
      {
        path: "/adminPage",
        element: <AdminPage />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
