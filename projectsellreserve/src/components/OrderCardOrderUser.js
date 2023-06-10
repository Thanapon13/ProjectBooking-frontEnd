import OrderUser from "./OrderUser";
import PaymentUser from "./PaymentUser";

export default function OrderCardOrderUser({
  roomImage,
  firstName,
  lastName,
  title,
  price,
  typeProduct,
  OrderStatusesDate,
  OrderStatuses,
  creditCardNumber,
  expirationDate,
  zipCode,
  country,
  cvv,
  OrderId,
  RoomId,
  UserId,
  PaymentId
}) {
  return (
    <>
      <div className="w-full mt-4 flex items-center justify-center flex-wrap gap-6 mb-6 border-b-2 py-6">
        {/* Box Image */}
        <div>
          <img src={roomImage} alt="img" className="w-[240px]" />
        </div>
        {/* Box Content */}
        <div className="w-4/6 flex justify-between items-center gap-6 p-2 flex-wrap">
          {/* Left */}

          <OrderUser
            firstName={firstName}
            lastName={lastName}
            title={title}
            price={price}
            typeProduct={typeProduct}
            OrderStatusesDate={OrderStatusesDate}
            UserId={UserId}
            OrderId={OrderId}
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
