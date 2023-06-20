import axios from "../config/axios";

export const getPaymentUser = () => axios.get("/admin/getPaymentUser");

export const updateOrderConfirmed = input =>
  axios.patch("/admin/statusUpdataOrderConfirmed", input);

export const updateOrderCancel = input =>
  axios.patch("/admin/statusUpdataOrderCancel", input);

export const updateReservationPaymentConfirmed = input =>
  axios.patch("/admin/statusUpdataReservationPaymentConfirmed", input);

export const updateReservationPaymentCancel = input =>
  axios.patch("/admin/statusUpdataReservationPaymentCancel", input);

export const deleteReservationPayment = roomId =>
  axios.delete(`{/admin/deleteReservationPayment/${roomId}`);

export const deleteReservationOrder = roomId =>
  axios.delete(`{/admin/deleteReservationOrder/${roomId}`);

// export const updateStatusConfirmed = input =>
//   axios.patch("/admin/statusUpdataConfirmed", input);
