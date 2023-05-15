import { useContext } from "react";
import { ProvinceContext } from "../contexts/ProvinceContext";

export default function useProvince() {
  return useContext(ProvinceContext);
}
