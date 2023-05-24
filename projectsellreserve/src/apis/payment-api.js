import axios from "../config/axios";

export const createPayment = input => axios.post("/payment", input);

// export const createPayment = async paymentData => {
//   try {
//     const response = await axios.post("/api/payment", paymentData);
//     return response.data;
//   } catch (error) {
//     throw new Error("เกิดข้อผิดพลาดในการสร้างการชำระเงิน:", error);
//   }
// };
