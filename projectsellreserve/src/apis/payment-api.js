import axios from "../config/axios";

export const createPayment = paymentData => axios.post("/payment", paymentData);
