import { createContext, useEffect, useState } from "react";
import useCart from "../hooks/useCart";
import { createOrder } from "../apis/order-api";
import { createPayment, getPayment } from "../apis/payment-api";
import useLoading from "../hooks/useLoading";

export const PaymentContext = createContext();

export default function PaymentContextProvider({ children }) {
  const { cart } = useCart();
  const { startLoading, stopLoading } = useLoading();

  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [getPayments, setgetPayments] = useState([]);
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
      }
    } catch (error) {
      console.error(
        "เกิดข้อผิดพลาดในการสร้างคำสั่งสร้างออเดอร์และการชำระเงิน:",
        error
      );
    }
  };

  // getPayment
  useEffect(() => {
    const fetchOrder = async () => {
      const res = await getPayment();
      setgetPayments(res.data.getPayment);
      // console.log(res.data.getPayment, "res.data.getPayment");
    };
    fetchOrder();
  }, []);

  return (
    <PaymentContext.Provider
      value={{
        handleCreateOrderPayment,
        setCreditCardNumber,
        setExpirationDate,
        setCvv,
        setZipCode,
        setCountry,
        getPayments
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
