import axios from "axios";

export const createOrder = input => axios.post("/order", input);
