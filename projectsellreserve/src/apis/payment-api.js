import axios from "../config/axios";

export const createPayment = input => axios.post("/payment", input);
