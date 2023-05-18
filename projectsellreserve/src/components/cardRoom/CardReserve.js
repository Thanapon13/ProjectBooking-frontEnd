import "flowbite";
import { DatePicker } from "antd";
import { useState } from "react";
import moment from "moment";
import Buttons from "../Buttons";
const { RangePicker } = DatePicker;

export default function CardReserve({ onClick }) {
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

        <Buttons onClick={onClick}>
          <p className="text-[20px]">จอง</p>
        </Buttons>
      </div>
    </div>
  );
}
