import { DatePicker } from "antd";
import { useState } from "react";
import { updateBooking } from "../../apis/booking-api";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const { RangePicker } = DatePicker;

export default function DatePickerUpdate({ onClose, bookingId }) {
  const navigate = useNavigate();
  const [updateCheckinDate, setUpdateCheckinDate] = useState(null);
  // console.log("updateCheckinDate:", updateCheckinDate);
  const [updateCheckoutDate, setUpdateCheckoutDate] = useState(null);
  // console.log("updateCheckoutDate:", updateCheckoutDate);

  const handleUpdateBooking = async () => {
    try {
      const updateBookingData = {
        startDate: moment(updateCheckinDate).format(),
        endDate: moment(updateCheckoutDate).format(),
        bookingId: bookingId
      };

      console.log("updateBookingData:", updateBookingData);
      console.log("----------------------------------------");
      const result = await updateBooking(updateBookingData);
      console.log("updateBooking result:", result);
      navigate(0);
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการอัปเดตการจอง:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2 ">
        <div>
          <h1 className="font-bold text-base">5 คืน</h1>
        </div>
        <div className="text-center">
          <RangePicker
            style={{ width: "100%" }}
            format="DD-MM-YYYY"
            onChange={values => {
              if (values !== null) {
                setUpdateCheckinDate(values[0].toDate());
                setUpdateCheckoutDate(values[1].toDate());
              }
            }}
          />
        </div>
        <div className="flex justify-center  items-center gap-6 mt-4">
          <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            onClick={handleUpdateBooking}
          >
            บันทึก
          </button>

          <button
            type="button"
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            onClick={onClose}
          >
            ยกเลิก
          </button>
        </div>
      </div>
    </>
  );
}
