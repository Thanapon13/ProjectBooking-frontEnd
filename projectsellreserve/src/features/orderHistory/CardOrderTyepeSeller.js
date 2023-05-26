import useAuth from "../../hooks/useAuth";

export default function CardOrderTyepeSeller() {
  const { orderUser } = useAuth();
  // console.log("orderUser:", orderUser);

  // ตรวจสอบว่า orderUser เป็นอาร์เรย์ที่ถูกต้องก่อนใช้งาน
  if (!Array.isArray(orderUser)) {
    return <div>No orders found.</div>;
  }

  return (
    <>
      {orderUser.map((item, idx) => (
        <div
          className="w-full mt-4 flex items-center justify-center flex-wrap gap-6 mb-6 border-b-2 py-6"
          key={idx}
        >
          {/* Box Image */}
          <div>
            <img src={item.Room.roomImage} alt="img" className="w-[240px]" />
          </div>
          {/* Box Content */}
          <div className="w-4/6 flex justify-between items-center gap-6 p-2 flex-wrap">
            {/* Left */}
            <div className="flex gap-2 flex-grow">
              {/* Order List */}
              <div className="font-bold">
                <h1>Customer:</h1>
                <h1>Product Name:</h1>
                <h1>Order ID:</h1>
                <h1>Price:</h1>
                <h1>Category:</h1>
                <h1>Date :</h1>
                <h1>OrderStatus :</h1>
              </div>
              <div>
                <h1>
                  {item.User.firstName} {item.User.lastName}
                </h1>
                <h1>{item.Room.title}</h1>
                <h1>{item.id}</h1>
                <h1>{item.Room.price} บาท</h1>
                <h1>{item.Room.Category.typeProduct}</h1>
                <h1>{item.OrderStatuses[0].date}</h1>
                <h1>{item.OrderStatuses[0].status}</h1>
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
                <h1>{item.Payment.creditCardNumber}</h1>
                <h1>{item.Payment.expirationDate}</h1>
                <h1>{item.Payment.cvv}</h1>
                <h1>{item.Payment.zipCode}</h1>
                <h1>{item.Payment.country}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
