import axios from "../config/axios";

export const createBooking = (roomId, bookingData) =>
  axios.post(`/booking/${roomId}`, bookingData);

export const updateBooking = updateBookingData =>
  axios.put("/booking/updateBooking", updateBookingData);

export const getBooking = () => axios.get("/booking/getbooking");
