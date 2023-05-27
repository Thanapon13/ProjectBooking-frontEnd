import { createContext, useState } from "react";
import useCart from "../hooks/useCart";
import { createOrder } from "../apis/order-api";
import { createPayment } from "../apis/payment-api";
import useLoading from "../hooks/useLoading";
import { handleSweetAlert2 } from "../components/SweetAlert2 ";

export const PaymentContext = createContext();

export default function PaymentContextProvider({ children }) {
  const { cart } = useCart();
  const { startLoading, stopLoading } = useLoading();

  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  // console.log("getPayments:", getPayments);

  // createPayment
  const handleCreateOrderPayment = async () => {
    const orderIds = [];
    console.log("orderIds:", orderIds);

    try {
      startLoading();
      for (const item of cart) {
        const createOrderData = {
          id: item.id // ใช้ item.id ในการสร้างคำสั่งซื้อสำหรับแต่ละรายการใน cart
        };

        // ส่งคำขอสร้างคำสั่งซื้อ
        const orderIdResponse = await createOrder(createOrderData); // ใช้รับค่า orderId ที่สร้างคำสั่งซื้อ
        const orderId = orderIdResponse.data.order.id;
        orderIds.push(orderId);
      }

      // กำหนดค่าข้อมูลการชำระเงิน
      for (const orderId of orderIds) {
        const paymentData = {
          creditCardNumber: Number(creditCardNumber),
          expirationDate: expirationDate,
          cvv: Number(cvv),
          zipCode: Number(zipCode),
          country: country,
          orderId: orderId
        };
        // console.log("paymentData:", paymentData);
        // สร้างการชำระเงิน
        await createPayment(paymentData);
        stopLoading();
        handleSweetAlert2({
          title: "ชำระเงินเสร็จสิ้น",
          icon: "success",
          text: "กรุณารอการตรวจสอบใช้เวลา 1-2 วัน",
          confirmButtonText: "รับทราบ",
          confirmButtonColor: "#4267B2"
        });
      }
    } catch (error) {
      console.error(
        "เกิดข้อผิดพลาดในการสร้างคำสั่งสร้างออเดอร์และการชำระเงิน:",
        error
      );
    }
  };

  return (
    <PaymentContext.Provider
      value={{
        handleCreateOrderPayment,
        setCreditCardNumber,
        setExpirationDate,
        setCvv,
        setZipCode,
        setCountry
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
