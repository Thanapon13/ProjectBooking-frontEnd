import { useContext } from "react";
import { PaymentContext } from "../contexts/PaymentContext";

export default function useOrder() {
  return useContext(PaymentContext);
}
