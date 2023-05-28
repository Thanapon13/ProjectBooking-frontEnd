import { createContext, useEffect, useState } from "react";
import { getBooking } from "../apis/booking-api";

export const BookingContext = createContext();

export default function BookingContextProvider({ children }) {
  const [booking, setBooking] = useState([]);
  // console.log("booking:", booking);

  useEffect(() => {
    const fetchBookingData = async () => {
      const res = await getBooking();
      setBooking(res.data);
      // console.log("res.data:", res.data);
    };
    fetchBookingData();
  }, []);

  return (
    <BookingContext.Provider value={{ booking }}>
      {children}
    </BookingContext.Provider>
  );
}
