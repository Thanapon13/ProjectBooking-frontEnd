import { useState } from "react";
import useBooking from "../../hooks/useBooking";
import DatePickerUpdate from "./DatePickerUpdate";

export default function EditBooking() {
  const { booking } = useBooking();
  // console.log("booking:", booking);
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  console.log("startDate:", startDate);
  const [endDate, setEndDate] = useState(null);
  console.log("endDate:", endDate);
  const [bookingId, setBookingId] = useState(null);
  console.log("bookingId:", bookingId);

  const handleOpen = id => {
    setOpen(true);
    setBookingId(id);
  };

  const handleClose = () => {
    setOpen(false);
    setBookingId(null);
  };

  return (
    <>
      {booking.map((el, idx) => (
        <div className="mt-10 border-b-2 pb-6" key={idx}>
          <h1 className="font-bold text-xl">การเดินทางของคุณ</h1>

          {/* วันที่ */}
          <div className="flex justify-between mt-5">
            <div className="flex flex-col justify-center items-start gap-2">
              <h1 className="font-bold">วันที่</h1>
              <p>
                {startDate && endDate
                  ? `${startDate.getDate()}-${endDate.getDate()} ${startDate.toLocaleString(
                      "default",
                      { month: "short" }
                    )}`
                  : `${new Date(el.startDate).getDate()}-${new Date(
                      el.endDate
                    ).getDate()} ${new Date(el.startDate).toLocaleString(
                      "default",
                      {
                        month: "short"
                      }
                    )}`}
              </p>
            </div>
            <div className="flex flex-col">
              {!open && (
                <button
                  type="button"
                  className="hover:underline underline-offset-1"
                  onClick={() => handleOpen(el.id)}
                >
                  <h1 className="font-bold text-[16px]">เปลี่ยน</h1>
                </button>
              )}
              {open && (
                <div>
                  <DatePickerUpdate
                    onClose={handleClose}
                    bookingId={bookingId}
                  />
                </div>
              )}
            </div>
          </div>

          {/* ผู้เข้าพัก */}
          <div className="flex justify-between mt-5">
            <div className="flex flex-col justify-center items-start gap-2">
              <h1 className="font-bold">ผู้เข้าพัก</h1>
              <p>ผู้เข้าพัก 1 คน</p>
            </div>
            <div>
              <button
                type="button"
                className="hover:underline underline-offset-1"
              >
                <h1 className="font-bold text-[16px]">แก้ไข</h1>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
