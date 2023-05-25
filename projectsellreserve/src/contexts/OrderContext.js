import { createContext, useEffect, useState } from "react";
import { getProvince } from "../apis/order-api";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [getOrder, setGetOrder] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      const res = await getProvince();
      setGetOrder(res.data.getOrder);
      // console.log(res.data.getOrder, "res.data.");
    };
    fetchOrder();
  }, []);
  return (
    <OrderContext.Provider value={{ getOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
