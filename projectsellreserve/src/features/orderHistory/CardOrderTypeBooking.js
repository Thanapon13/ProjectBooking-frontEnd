import moment from "moment";
import useAuth from "../../hooks/useAuth";
import { format } from "date-fns/esm";
import PaymentUser from "../../components/PaymentUser";

export default function CardOrderTypeBooking() {
  const { roomReservationPayment, authenticateUser } = useAuth();

  // console.log("authenticateUser", authenticateUser);
  // console.log("roomReservationPayment:", roomReservationPayment);
  // console.log("getUserData------------", getUserData);

  // ตรวจสอบว่า roomReservationPayment มีค่าที่ถูกต้องและมีข้อมูลอยู่
  if (
    !roomReservationPayment ||
    !roomReservationPayment.pureReservationPaymentData
  ) {
    return <div>No orders found.</div>;
  }

  return (
    <>
      {roomReservationPayment.pureReservationPaymentData.map((el, idx) => {
        // แปลงรูปแบบวันที่
        const startDate = format(new Date(el.startDate), "dd-MM-yyyy");
        const endDate = format(new Date(el.startDate), "dd-MM-yyyy");

        return (
          <>
            {/* Check if user is the owner */}
            {el.userId === authenticateUser.id && (
              <div
                className="w-full mt-4 flex items-center justify-center flex-wrap gap-6 mb-6 border-b-2 py-6"
                key={idx}
              >
                {/* Box Image */}
                <div>
                  <img
                    src={el.Room.roomImage}
                    alt="img"
                    className="w-[240px]"
                  />
                </div>
                {/* Box Content */}
                <div className="flex justify-between items-start gap-6 p-2 flex-wrap">
                  {/* Left */}
                  <div className="flex gap-2 flex-grow">
                    <div className="font-bold">
                      <h1>Customer :</h1>
                      <h1>Product Name :</h1>
                      <h1>Price per Night :</h1>
                      <h1>Check-in :</h1>
                      <h1>Check-out :</h1>
                      <h1>Nights :</h1>
                      <h1>Price :</h1>
                      <h1>Total :</h1>
                      <h1>Number of Guests :</h1>
                      <h1>Status :</h1>
                    </div>
                    <div>
                      <h1>
                        {el.User.firstName} {el.User.lastName}
                      </h1>
                      <h1>{el.Room.title}</h1>
                      <h1>{el.Room.price} บาท</h1>
                      <h1>{startDate}</h1>
                      <h1>{endDate}</h1>
                      <h1>
                        {el.Room.price} x{" "}
                        {moment(el.endDate).diff(el.startDate, "days")} คืน
                      </h1>
                      <h1>
                        {el.Room.price *
                          moment(el.endDate).diff(el.startDate, "days")}{" "}
                        บาท
                      </h1>
                      <h1>
                        {el.Room.price *
                          moment(el.endDate).diff(el.startDate, "days") +
                          1500}{" "}
                        บาท
                      </h1>
                      <h1>0</h1>
                      <h1 className="text-rose-600">
                        {el.OrderStatuses[0].status}
                      </h1>
                    </div>
                  </div>

                  {/* Payment Order */}
                  <PaymentUser
                    creditCardNumber={el.Payments[0].creditCardNumber}
                    expirationDate={el.Payments[0].expirationDate}
                    cvv={el.Payments[0].cvv}
                    zipCode={el.Payments[0].zipCode}
                    country={el.Payments[0].country}
                  />
                </div>
                <div className="w-full flex items-center justify-center flex-wrap gap-2">
                  <h1 className="font-bold">Address:</h1>
                  <p>{el.Room.address}</p>
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
}
