import { BiChevronLeft } from "react-icons/bi";
import EditBooking from "./EditBooking";
import FormPayment from "./FormPayment";
import Buttons from "../../components/Buttons";
import RoomDetailCard from "./RoomDetailCard";
import useCart from "../../hooks/useCart";
import React, { useState } from "react";
import Modal from "../../components/modal/Modal";
import CancellationPolicy from "./CancellationPolicy";
import { createOrder } from "../../apis/order-api";
import { createPayment } from "../../apis/payment-api";

export default function PaymentOrderContainer() {
  const { cart } = useCart();
  // console.log("cart:", cart);
  const [open, setOpen] = useState(false);
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");

  const handleCreateOrderPayment = async () => {
    try {
      for (const item of cart) {
        const createOrderData = {
          id: item.id // ใช้ item.id ในการสร้างคำสั่งซื้อสำหรับแต่ละรายการใน cart
        };
        // ส่งคำขอสร้างคำสั่งซื้อ
        await createOrder(createOrderData);
        // console.log("orderId:", orderId);
      }

      // กำหนดค่าข้อมูลการชำระเงิน
      const paymentData = {
        creditCardNumber: Number(creditCardNumber),
        expirationDate: expirationDate,
        cvv: Number(cvv),
        zipCode: Number(zipCode),
        country: country,
        orderId: cart.map(item => item.id)
      };

      console.log("paymentData:", paymentData);
      // สร้างการชำระเงิน
      await createPayment(paymentData);
    } catch (error) {
      console.error(
        "เกิดข้อผิดพลาดในการสร้างคำสั่งสร้างออเดอร์และการชำระเงิน:",
        error
      );
    }
  };

  return (
    <>
      <div className="flex justify-center flex-wrap	">
        {/* Container Left */}
        <div className="w-5/12 p-2  flex-wrap	">
          {/* Header */}
          <div className="flex items-center gap-6 mt-10">
            <i className="text-3xl cursor-pointer hover:rounded-full hover:bg-gray-200">
              <BiChevronLeft />
            </i>
            <h1 className="text-[30px] font-bold">ยืนยันและชำระเงิน</h1>
          </div>

          <div className="w-[90%] m-auto">
            {cart.map((el, idx) => (
              <React.Fragment key={idx}>
                {el.Room.Category.typeProduct === "reserve" && <EditBooking />}
              </React.Fragment>
            ))}
            <FormPayment
              onCreditCardNumberChange={e =>
                setCreditCardNumber(e.target.value)
              }
              onExpirationDateChange={e => setExpirationDate(e.target.value)}
              onCvvChange={e => setCvv(e.target.value)}
              onZipCodeChange={e => setZipCode(e.target.value)}
              onCountryChange={setCountry}
            />

            <div className="mt-5 border-b-2 pb-6 flex flex-col gap-4">
              <h1 className="font-bold text-xl">นโยบายยกเลิกการจอง</h1>
              <div>
                <p>
                  <span className="font-bold text-base">
                    ยกเลิกฟรีภายใน 48 ชั่วโมง{" "}
                  </span>{" "}
                  ยกเลิกก่อนวันที่ 14 มิ.ย. เพื่อรับเงินคืนบางส่วน
                </p>
                <button
                  className="font-bold underline text-base"
                  onClick={() => setOpen(true)}
                >
                  ดูข้อมูลเพิ่มเติม
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center pb-20 mt-5 gap-4">
              <p className="text-xs">
                การเลือกปุ่มด้านล่างเป็นการยอมรับกฎของที่พักโดยเจ้าของที่พัก
                กฎพื้นฐานสำหรับผู้เข้าพัก นโยบายการจองใหม่และนโยบายการคืนเงินของ
                Airbnb และตกลงว่า Airbnb
                มีสิทธิเรียกเก็บเงินจากวิธีชำระเงินของฉัน
                หากข้าพเจ้าเป็นผู้สร้างความเสียหาย
              </p>
              <Buttons
                style={{ width: "50%", fontSize: "20px" }}
                onClick={() => handleCreateOrderPayment()}
              >
                ยืนยันและชำระเงิน
              </Buttons>
            </div>
          </div>
        </div>

        {/* Container Right */}
        <div className="w-5/12 flex justify-center items-center ">
          <RoomDetailCard />
        </div>
      </div>

      <Modal
        title="นโยบายยกเลิกการจอง"
        style={{ width: "500px" }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <CancellationPolicy />
      </Modal>
    </>
  );
}
