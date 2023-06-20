import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import Buttons from "../components/Buttons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createBooking } from "../apis/booking-api";
import useProduct from "../hooks/useProduct";

const { RangePicker } = DatePicker;

export default function CardBooking({ handleAddToCardReserve }) {
  const navigate = useNavigate();
  const { product } = useProduct();
  const { roomId } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  console.log("startDate", startDate);
  const [endDate, setEndDate] = useState(null);
  console.log("endDate", endDate);

  const selectedProduct = product.find(el => el.id === +roomId);

  if (!selectedProduct) {
    return <div>ไม่พบสินค้าที่คุณเลือก</div>;
  }

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCreateBooking = async () => {
    try {
      await handleAddToCardReserve();

      const bookingData = {
        startDate: moment(startDate).format(),
        endDate: moment(endDate).format(),
        price: selectedProduct.price,
        total: getTotalPrice()
      };
      console.log("bookingData", bookingData);

      await createBooking(roomId, bookingData);
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };

  const getTotalPrice = () => {
    if (startDate && endDate) {
      const duration = moment(endDate).diff(moment(startDate), "days");
      return selectedProduct.price * duration;
    }
    return 0;
  };

  return (
    <div>
      <div className="border-2 p-4 rounded-xl bg-white shadow-lg shadow-indigo-500/40">
        <div className="flex gap-2 justify-start items-center mb-2">
          <h1 className="text-[18px]">฿ {selectedProduct.price} คืน</h1>
        </div>

        {/* date booking */}
        <div className="text-center">
          <RangePicker
            style={{ width: "100%" }}
            format="DD-MM-YYYY"
            onChange={values => {
              if (values !== null) {
                setStartDate(values[0].toDate());
                setEndDate(values[1].toDate());
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
            {/* adult */}
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

            {/* child */}
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

            {/* additional info */}
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

        <Link to="/paymentOrderPage">
          <Buttons type="submit" onClick={handleCreateBooking}>
            <p className="text-[20px]">จอง</p>
          </Buttons>
        </Link>

        <div className="flex flex-col gap-2 flex-wrap border-b-2 py-6">
          <div className="text-center mb-4">
            <p className="text-base">ยังไม่มีการเรียกเก็บเงินจากคุณ</p>
          </div>
          <div className="flex justify-between">
            <p className="underline cursor-pointer text-base">
              ฿{selectedProduct.price} x{" "}
              {moment(endDate).diff(moment(startDate), "days")} คืน
            </p>
            <p>฿{getTotalPrice()}</p>
          </div>
          <div className="flex justify-between">
            <p className="underline cursor-pointer text-base">
              ค่าบริการ HamBooking
            </p>
            <p>฿1,500</p>
          </div>
        </div>

        <div className="flex justify-between mt-2">
          <p className="font-bold">ยอดรวม (ไม่รวมภาษี)</p>
          <p className="font-bold">{getTotalPrice() + 1500}</p>
        </div>
      </div>
    </div>
  );
}
