import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { login, getMe } from "../apis/auth-api";
import { updateProfile, getUserOrderHistorys } from "../apis/user-api";

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
  const [orderUser, setOrderUser] = useState("");
  // console.log("orderUser:", orderUser);

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await getMe();
        // console.log(res, "res");
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

  return (
    <AuthContext.Provider
      value={{
        authenticateUser,
        userLogin,
        logout,
        userUpdateProfile,
        orderUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
