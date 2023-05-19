import { createContext, useEffect, useState } from "react";
import * as cartApi from "../apis/carts-api";
export const CartContext = createContext();

export default function LoadingContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  //   console.log(cart, "cart");

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await cartApi.getCart();
      setCart(res.data.getCart);
      //   console.log(res.data.getCart, "res.data.getCart");
    };
    fetchProduct();
  }, []);

  const handleAddcart = async roomId => {
    // await cartApi.createCart(`/carts/${roomId}`);
    await cartApi.createCart({}, roomId);
  };

  const handleDeleteRoom = async roomId => {
    await cartApi.deleteRoom(roomId);
  };

  return (
    <CartContext.Provider value={{ cart, handleAddcart, handleDeleteRoom }}>
      {children}
    </CartContext.Provider>
  );
}
