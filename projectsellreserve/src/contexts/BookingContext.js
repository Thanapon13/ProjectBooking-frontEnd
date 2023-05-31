import { createContext, useEffect, useState } from "react";
import { getBooking, getbookingId, deleteRoom } from "../apis/booking-api";
import { getRoomReservationPayment } from "../apis/reservationPayment-api";

export const BookingContext = createContext();

export default function BookingContextProvider({ children }) {
  const [booking, setBooking] = useState([]);
  // console.log("booking:", booking);
  const [bookingId, setBookingId] = useState([]);
  const [reservationPayment, setReservationPayment] = useState([]);
  // console.log("reservationPayment: ", reservationPayment);

  useEffect(() => {
    const fetchBookingData = async () => {
      const res = await getBooking();
      setBooking(res.data);
      // console.log("res.data:", res.data);
    };
    fetchBookingData();
  }, []);

  useEffect(() => {
    const fetchBookingIdData = async () => {
      const res = await getbookingId();
      setBookingId(res.data.getbookingIdData.id);
    };
    fetchBookingIdData();
  }, []);

  const handleDeleteBooking = async roomId => {
    await deleteRoom(roomId);
  };

  return (
    <BookingContext.Provider
      value={{ booking, bookingId, handleDeleteBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
}
