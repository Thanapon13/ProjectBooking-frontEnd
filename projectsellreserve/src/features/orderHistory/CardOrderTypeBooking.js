import moment from "moment";
import useAuth from "../../hooks/useAuth";
import { format } from "date-fns/esm";

export default function CardOrderTypeBooking() {
  const { roomReservationPayment } = useAuth();
  // console.log("roomReservationPayment:", roomReservationPayment);

  // ตรวจสอบว่า roomReservationPayment มีค่าที่ถูกต้องและมีข้อมูลอยู่
  if (
    !roomReservationPayment ||
    !roomReservationPayment.pureReservationPaymentData
  ) {
    return <div>No orders found.</div>;
  }
  const el = roomReservationPayment.pureReservationPaymentData[0]; // ใช้ดัชนี [0] เพื่อเข้าถึงข้อมูลเดียว
  // console.log("el", el);

  // แปลงรูปแบบวันที่
  const startDate = format(new Date(el.startDate), "dd-MM-yyyy");
  const endDate = format(new Date(el.startDate), "dd-MM-yyyy");

  return (
    <>
      <div className="w-full mt-4 flex items-center justify-center flex-wrap gap-6 mb-6 border-b-2 py-6">
        {/* Box Image */}
        <div>
          <img src={el.Room.roomImage} alt="img" className="w-[240px]" />
        </div>
        {/* Box Content */}
        <div className="w-4/6 flex justify-between items-center gap-6 p-2 flex-wrap">
          {/* Left */}
          <div className="flex gap-2 flex-grow">
            {/* Order List */}
            <div className="font-bold">
              <h1>Custoomer :</h1>
              <h1>ราคาต่อคืน</h1>
              <h1>ReservationPayment id :</h1>
              <h1>Check in :</h1>
              <h1>Check out :</h1>
              <h1>จำรวนคืน :</h1>
              <h1>ราคายังไม่รวมค่าบริการ :</h1>
              <h1>ราคารวมค่าบริการ :</h1>
              <h1>Number of guests :</h1>
              <h1>Status :</h1>
            </div>
            <div>
              <h1>
                {el.User.firstName} {el.User.lastName}
              </h1>
              <h1>{el.Room.price} บาท</h1>
              <h1>{el.id}</h1>
              <h1>{startDate}</h1>
              <h1>{endDate}</h1>
              <h1>
                {el.Room.price} x{" "}
                {moment(el.endDate).diff(el.startDate, "days")} คืน
              </h1>
              <h1>
                {el.Room.price * moment(el.endDate).diff(el.startDate, "days")}{" "}
                บาท
              </h1>
              <h1>
                {el.Room.price * moment(el.endDate).diff(el.startDate, "days") +
                  1500}{" "}
                บาท
              </h1>
              <h1>0</h1>
              <h1>Status :</h1>
            </div>
          </div>
          {/* Payment Order */}
          <div className="flex flex-grow">
            <div className="font-bold">
              <h1>Credit Card Number:</h1>
              <h1>Expiration Date:</h1>
              <h1>CVV:</h1>
              <h1>Zip Code:</h1>
              <h1>Country:</h1>
            </div>
            <div>
              <h1>{el.Payments[0].creditCardNumber}</h1>
              <h1>{el.Payments[0].expirationDate}</h1>
              <h1>{el.Payments[0].cvv}</h1>
              <h1>{el.Payments[0].zipCode}</h1>
              <h1>{el.Payments[0].country}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
