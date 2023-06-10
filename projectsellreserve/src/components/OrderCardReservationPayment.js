import CardOrderTypeBooking from "./CardOrderTypeBooking";
import PaymentUser from "./PaymentUser";

export default function OrderCardReservationPayment({
  PaymentId,
  creditCardNumber,
  expirationDate,
  cvv,
  zipCode,
  country,
  firstName,
  lastName,
  title,
  price,
  CheckIn,
  CheckOut,
  Nights,
  Total,
  typeProduct,
  UserId,
  RoomId,
  OrderStatuses,
  roomImage
}) {
  return (
    <>
      <div className="w-full mt-4 flex items-center justify-center flex-wrap gap-6 mb-6 border-b-2 py-6">
        {/* Box Image */}
        <div>
          <img src={roomImage} alt="Room" className="w-[240px]" />
        </div>
        {/* Box Content */}
        <div className="w-4/6 flex justify-between items-center gap-6 p-2 flex-wrap">
          {/* Left */}
          <CardOrderTypeBooking
            firstName={firstName}
            lastName={lastName}
            title={title}
            price={price}
            CheckIn={CheckIn}
            CheckOut={CheckOut}
            Nights={Nights}
            Total={Total}
            typeProduct={typeProduct}
            UserId={UserId}
            RoomId={RoomId}
            OrderStatuses={OrderStatuses}
          />
          {/* Payment Order */}
          <PaymentUser
            PaymentId={PaymentId}
            creditCardNumber={creditCardNumber}
            expirationDate={expirationDate}
            cvv={cvv}
            zipCode={zipCode}
            country={country}
          />
        </div>
      </div>
    </>
  );
}
