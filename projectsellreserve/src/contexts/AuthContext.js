import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { login, getMe } from "../apis/auth-api";
import useLoading from "../hooks/useLoading";

import {
  updateProfile,
  getUserOrderHistorys,
  getUserOrderHistoryRoomReservationPayment
} from "../apis/user-api";

import {
  getPaymentUser,
  updateOrderConfirmed,
  updateReservationPaymentConfirmed,
  updateOrderCancel,
  updateReservationPaymentCancel,
  deletePaymentOrder
} from "../apis/admin-api";

import {
  getAccessToken,
  removeAccessToken,
  setAccessToken
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticateUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  );
  // console.log("authenticateUser", authenticateUser);

  const [orderUser, setOrderUser] = useState("");
  // console.log("orderUser:", orderUser);
  const [roomReservationPayment, setRoomReservationPayment] = useState([]);
  // console.log("roomReservationPayment:", roomReservationPayment);

  const [paymentUser, setPaymentUser] = useState([]);
  // console.log("paymentUser:", paymentUser);

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await getMe();
        // console.log("getMe", res);
        setAuthenticatedUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    if (getAccessToken) {
      fetchAuthUser();
    }
  }, []);

  const userLogin = async (email, password) => {
    const res = await login({ email, password });
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  const userUpdateProfile = async data => {
    const res = await updateProfile(data);
    setAuthenticatedUser({ ...authenticateUser, ...res.data });
  };

  useEffect(() => {
    const fetchOrderUser = async () => {
      const res = await getUserOrderHistorys();
      setOrderUser(res.data);
      // console.log("res.data", res.data);
    };
    fetchOrderUser();
  }, []);

  useEffect(() => {
    const fetchOrderRoomReservationPayment = async () => {
      const res = await getUserOrderHistoryRoomReservationPayment();
      setRoomReservationPayment(res.data);
      // console.log("res.data", res.data);
    };
    fetchOrderRoomReservationPayment();
  }, []);

  useEffect(() => {
    const fetchsetPaymentUser = async () => {
      const res = await getPaymentUser();
      setPaymentUser(res.data.purePaymentUserData);
      // console.log("res.data.purePaymentUserData", res.data.purePaymentUserData);
    };
    fetchsetPaymentUser();
  }, []);

  const handleupdateOrderConfirmed = async orderId => {
    try {
      await updateOrderConfirmed({
        orderId,
        action: "confirmed"
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleupdateOrderCancel = async orderId => {
    try {
      await updateOrderCancel({
        orderId,
        action: "cancel"
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleupdateReservationPaymentConfirmed =
    async reservationPaymentId => {
      try {
        await updateReservationPaymentConfirmed({
          reservationPaymentId,
          action: "confirmed"
        });
      } catch (err) {
        console.log(err);
      }
    };

  const handleupdateReservationPaymentCancel = async reservationPaymentId => {
    try {
      await updateReservationPaymentCancel({
        reservationPaymentId,
        action: "cancel"
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeletePaymentOrder = async orderId => {
    try {
      await deletePaymentOrder(orderId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authenticateUser,
        userLogin,
        logout,
        userUpdateProfile,
        orderUser,
        roomReservationPayment,
        paymentUser,
        handleupdateOrderConfirmed,
        handleupdateOrderCancel,
        handleupdateReservationPaymentConfirmed,
        handleupdateReservationPaymentCancel,
        handleDeletePaymentOrder
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
