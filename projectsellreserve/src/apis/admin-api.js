import axios from "../config/axios";

export const getPaymentUser = () => axios.get("/admin/getPaymentUser");
export const updateConfirmed = input =>
  axios.patch("/admin/statusUpdataConfirmed", input);
