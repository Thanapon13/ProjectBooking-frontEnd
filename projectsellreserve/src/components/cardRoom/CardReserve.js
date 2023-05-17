import "flowbite";
import { DatePicker } from "antd";
import DropdownCardReserve from "./DropdownCardReserve";
import { useState } from "react";
import moment from "moment";
const { RangePicker } = DatePicker;

export default function CardReserve() {
  const [dates, setDates] = useState([]);
  // console.log(dates, "dates-------------");

  return (
    <div>
      <div className="border-2 p-4 rounded-xl bg-white shadow-lg shadow-indigo-500/40">
        <div className="flex gap-2 justify-start items-center mb-2">
          <h1 className="text-[18px]">฿21,018 คืน</h1>
        </div>

        <div className="text-center">
          <RangePicker
            onChange={values => {
              // const value1 = moment(values[0]).format("DD-MM-YYYY");
              // console.log(value1, "value1");
              setDates(
                values.map(item => {
                  return moment(item).format("YYYY-DD-MM");
                })
              );
            }}
          />
        </div>

        <DropdownCardReserve />
        <a href="/paymentbooking">
          <button
            type="button"
            className="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm p-4 text-center mr-2 mb-2 mt-5"
          >
            <p className="text-[20px]">จอง</p>
          </button>
        </a>
      </div>
    </div>
  );
}
