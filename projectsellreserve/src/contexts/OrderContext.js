import { createContext } from "react";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  return <OrderContext.Provider value={{}}>{children}</OrderContext.Provider>;
}
