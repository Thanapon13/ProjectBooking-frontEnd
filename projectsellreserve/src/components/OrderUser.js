export default function OrderUser({
  firstName,
  lastName,
  title,
  price,
  typeProduct,
  OrderStatusesDate,
  UserId,
  OrderId,
  RoomId,
  OrderStatuses
}) {
  return (
    <>
      <div className="font-bold">
        <h1>Customer:</h1>
        <h1>Product Name:</h1>
        <h1>Price:</h1>

        <h1>Category:</h1>
        <h1>Date :</h1>
        {UserId && <h1>UserId</h1>}
        {OrderId && <h1>OrderId</h1>}
        {RoomId && <h1>RoomId:</h1>}
        <h1>OrderStatus :</h1>
      </div>
      <div>
        <h1>
          {firstName} {lastName}
        </h1>
        <h1>{title}</h1>
        <h1>{price} บาท</h1>
        <h1>{typeProduct}</h1>
        <h1>{OrderStatusesDate}</h1>
        <h1>{UserId}</h1>
        <h1>{OrderId}</h1>
        <h1>{RoomId}</h1>
        <h1 className="text-rose-600">{OrderStatuses}</h1>
      </div>
    </>
  );
}
