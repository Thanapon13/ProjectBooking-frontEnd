import axios from "../config/axios";

export const createPayment = input => axios.post("/payment", input);
export const getPayment = () => axios.get("/payment/getpayment");
