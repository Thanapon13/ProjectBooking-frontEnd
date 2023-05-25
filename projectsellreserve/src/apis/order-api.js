import axios from "../config/axios";

export const createOrder = input => axios.post("/order", input);
export const getProvince = () => axios.get("/order/getorder");
