import axios from "../config/axios";

export const createReservationPayment = input =>
  axios.post("/reservationPayment", input);

export const getReservation = () =>
  axios.get("/reservationPayment/getReservation");
