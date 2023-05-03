import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function ProtectedRout({ children }) {
  const { authenticateUser } = useAuth();
  if (!authenticateUser) {
    return <Navigate to={"/"} />;
  }
  return children;
}
