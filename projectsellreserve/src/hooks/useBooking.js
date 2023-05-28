import { useContext } from "react";
import { BookingContext } from "../contexts/BookingContext";

export default function useAuth() {
  return useContext(BookingContext);
}
