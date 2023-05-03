import { createContext, useEffect, useState } from "react";
import * as authApi from "../apis/auth-api";
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

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getMe();
        // console.log(res, "res");
        setAuthenticatedUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    fetchAuthUser();
  }, []);

  const login = async (email, password) => {
    const res = await authApi.login({ email, password });
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(true);
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  return (
    <AuthContext.Provider value={{ authenticateUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
