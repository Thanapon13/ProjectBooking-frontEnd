import { createContext, useState } from "react";
import * as authApi from "../apis/auth-api";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticateUser, setAuthenticatedUser] = useState(null);

  const login = async (email, password) => {
    const res = await authApi.login({ email, password });
  };

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
}
