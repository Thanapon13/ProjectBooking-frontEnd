import axios from "../config/axios";

export const updateProfile = formData => axios.patch("/user", formData);
export const updateUserInfo = input => axios.patch("/user/info", input);
export const getUserOrderHistorys = () => axios.get("/user/userOrder");
export const getUserOrderHistoryRoomReservationPayment = () =>
  axios.get("/user/getUserOrderHistoryRoomReservationPayment");
