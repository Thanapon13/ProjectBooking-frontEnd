import "flowbite";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import Buttons from "../components/Buttons";
const { RangePicker } = DatePicker;

export default function CardBooking({ onClick }) {
  const [dates, setDates] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="border-2 p-4 rounded-xl bg-white shadow-lg shadow-indigo-500/40">
        <form>
          <div className="flex gap-2 justify-start items-center mb-2">
            <h1 className="text-[18px]">฿21,018 คืน</h1>
          </div>
          {/* date booking */}
          <div className="text-center">
            <RangePicker
              style={{ width: "100%" }}
              onChange={values => {
                if (values !== null) {
                  setDates(
                    values.map(item => {
                      return moment(item).format("YYYY-DD-MM");
                    })
                  );
                }
              }}
            />
          </div>

          {/* dropdown ใส่จำนวนผู้เข้าพัก */}
          <div
            className="p-2 flex justify-between items-center cursor-pointer border-2 rounded-b-lg"
            onClick={handleClick}
          >
            <div>
              <p className="text-xs">ผู้เข้าพัก</p>
              <h1 className="text-sm">ผู้เข้าพัก 1 คน</h1>
            </div>
            <div>
              <i className="text-2xl">
                {isOpen ? <BiChevronUp /> : <BiChevronDown />}
              </i>
            </div>
          </div>

          {isOpen && (
            <div className="border-2 p-2 rounded-lg flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-[16px] font-bold">ผู้ใหญ่</h1>
                  <p className="text-[14px]">อายุ 13 ขึ้นไป</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <i className="border-2 text-gray-400 text-2xl rounded-full cursor-pointer hover:border-black hover:text-black">
                    <IoIosAdd />
                  </i>
                  <p className="text-lg">0</p>
                  <i className="border-2 text-gray-400 text-2xl rounded-full cursor-pointer hover:border-black hover:text-black">
                    <IoIosRemove />
                  </i>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-[16px] font-bold">เด็ก</h1>
                  <p className="text-[14px]">อายุ 2-12 ปี</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <i className="border-2 text-gray-400 text-2xl rounded-full cursor-pointer hover:border-black hover:text-black">
                    <IoIosAdd />
                  </i>
                  <p className="text-lg">0</p>
                  <i className="border-2 text-gray-400 text-2xl rounded-full cursor-pointer hover:border-black hover:text-black">
                    <IoIosRemove />
                  </i>
                </div>
              </div>

              <div>
                <p className="text-sm">
                  ที่พักนี้รับผู้เข้าพักได้สูงสุด 3 คน ไม่รวมทารก
                  และห้ามนำสัตว์เลี้ยงเข้า
                </p>
              </div>

              <div className="text-right">
                <h1
                  className="text-[16px] font-bold underline cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  ปิด
                </h1>
              </div>
            </div>
          )}
          <Buttons onClick={onClick}>
            <p className="text-[20px]">จอง</p>
          </Buttons>
        </form>

        <div className="flex flex-col gap-2 flex-wrap border-b-2 py-6">
          <div className="text-center mb-4">
            <p className="text-base">ยังไม่มีการเรียกเก็บเงินจากคุณ</p>
          </div>
          <div className="flex justify-between">
            <p className="underline cursor-pointer text-base">฿5,499 x 6 คืน</p>
            <p>฿32,994</p>
          </div>
          <div className="flex justify-between">
            <p className="underline cursor-pointer text-base">
              ค่าบริการ HamBooking
            </p>
            <p>฿5,112</p>
          </div>
        </div>

        <div className="flex justify-between mt-2">
          <p className="font-bold">ยอดรวม (ไม่รวมภาษี)</p>
          <p className="font-bold">฿38,956</p>
        </div>
      </div>
    </div>
  );
}
