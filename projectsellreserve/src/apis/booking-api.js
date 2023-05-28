import axios from "../config/axios";

export const createBooking = (roomId, bookingData) =>
  axios.post(`/booking/${roomId}`, bookingData);

export const getBooking = () => axios.get("/booking/getbooking");
