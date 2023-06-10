import OrderUser from "../../components/OrderUser";
import PaymentUser from "../../components/PaymentUser";
import useAuth from "../../hooks/useAuth";

export default function CardOrderTyepeSeller() {
  const { orderUser, authenticateUser } = useAuth();

  // ตรวจสอบว่า orderUser เป็นอาร์เรย์ที่ถูกต้องก่อนใช้งาน
  if (!Array.isArray(orderUser)) {
    return <div>No orders found.</div>;
  }
  return (
    <>
      {orderUser.map((item, idx) => {
        return (
          <>
            {item.User.id === authenticateUser.id && (
              <div
                className="w-full mt-4 flex items-center justify-center flex-wrap gap-6 mb-6 border-b-2 py-6"
                key={idx}
              >
                {/* Box Image */}
                <div>
                  <img
                    src={item.Room.roomImage}
                    alt="img"
                    className="w-[240px]"
                  />
                </div>
                {/* Box Content */}
                <div className="w-4/6 flex justify-between items-center gap-6 p-2">
                  {/* Left */}
                  <div className="flex gap-2 flex-grow">
                    {/* Order List */}

                    <OrderUser
                      firstName={item.User.firstName}
                      lastName={item.User.lastName}
                      title={item.Room.title}
                      price={item.Room.price}
                      typeProduct={item.Room.Category.typeProduct}
                      OrderStatusesDate={item.OrderStatuses[0].date}
                      OrderStatuses={item.OrderStatuses[0].status}
                    />
                  </div>
                  {/* Payment Order */}
                  <div className="flex flex-grow">
                    <PaymentUser
                      creditCardNumber={item.Payment.creditCardNumber}
                      expirationDate={item.Payment.expirationDate}
                      cvv={item.Payment.cvv}
                      zipCode={item.Payment.zipCode}
                      country={item.Payment.country}
                    />
                  </div>
                </div>
                <div className="w-full flex items-center justify-center flex-wrap gap-2">
                  <h1 className="font-bold"> Address :</h1>
                  <p> {item.Room.address}</p>
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
}
