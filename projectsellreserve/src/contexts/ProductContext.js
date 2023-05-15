import { createContext, useEffect, useState } from "react";
import * as productApi from "../apis/product-api";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productApi.getRoomProduct();
      setProduct(res.data.rooms);
      // console.log(res.data.rooms, "res.data.rooms");
    };
    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
}
