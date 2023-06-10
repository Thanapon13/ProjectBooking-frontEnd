import moment from "moment";

export default function CardOrderTypeBooking({
  firstName,
  lastName,
  title,
  price,
  CheckIn,
  CheckOut,
  typeProduct,
  UserId,
  RoomId,
  OrderStatuses
}) {
  return (
    <>
      <div className="font-bold">
        <h1>Customer:</h1>
        <h1>Room Name:</h1>
        <h1>Price Per Nights:</h1>
        <h1>CheckIn:</h1>
        <h1>CheckOut:</h1>
        <h1>Nights:</h1>
        <h1>Total:</h1>
        <h1>Category:</h1>
        <h1>UserId</h1>
        <h1>RoomId:</h1>
        <h1>OrderStatus :</h1>
      </div>
      <div>
        <h1>
          {firstName} {lastName}
        </h1>
        <h1>{title}</h1>
        <h1>{price} บาท</h1>
        <h1>{moment(CheckIn).format("DD-M-YYYY")}</h1>
        <h1>{moment(CheckOut).format("DD-M-YYYY")}</h1>
        <h1>
          {price} x {moment(CheckOut).diff(CheckIn, "days")} คืน
        </h1>
        <h1>{price * moment(CheckOut).diff(CheckIn, "days") + 1500} บาท </h1>
        <h1>{typeProduct}</h1>
        <h1>{UserId}</h1>
        <h1>{RoomId}</h1>
        <h1 className="text-rose-600">{OrderStatuses}</h1>
      </div>
    </>
  );
}
