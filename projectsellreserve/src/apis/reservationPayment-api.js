import axios from "../config/axios";

export const createReservationPayment = input =>
  axios.post("/reservationPayment", input);
