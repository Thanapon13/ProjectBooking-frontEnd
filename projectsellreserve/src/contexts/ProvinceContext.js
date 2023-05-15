import { createContext, useEffect, useState } from "react";

import * as provinceApi from "../apis/province-api";

export const ProvinceContext = createContext();

export default function ProvinceContextProvider({ children }) {
  const [province, setProvince] = useState([]);

  useEffect(() => {
    const fetchProvinceLogo = async () => {
      const res = await provinceApi.getProvince();
      setProvince(res.data.provinces);
      //   console.log(res.data, "res.data.province");
    };
    fetchProvinceLogo();
  }, []);

  return (
    <ProvinceContext.Provider value={{ province }}>
      {children}
    </ProvinceContext.Provider>
  );
}
