import useOrder from "../../hooks/useOrder";
import usePayment from "../../hooks/usePayment";

export default function CardOrderTyepeSeller() {
  const { getOrder } = useOrder();
  const { getPayments } = usePayment();

  return (
    <>
      {getOrder.map((orderItem, orderIndex) => {
        const roomImages = JSON.parse(orderItem.Room.roomImage);
        const firstImage =
          roomImages && roomImages.length > 0 ? roomImages[0] : null;
        return (
          <div
            className="w-full mt-4 flex items-center justify-center flex-wrap gap-6 mb-6 border-b-2 py-6"
            key={orderIndex}
          >
            {/* Box Image */}
            <div>
              <img src={firstImage} alt="img" className="w-[240px]" />
            </div>

            {/* Box Content */}
            <div className="w-4/6 flex justify-between items-center gap-6 p-2 flex-wrap ">
              {/* Left */}
              <div className="flex gap-2 flex-grow">
                {/* Order List */}
                <div className="font-bold">
                  <h1>Customer:</h1>
                  <h1>Product Name:</h1>
                  <h1>Order ID:</h1>
                  <h1>Price:</h1>
                  <h1>Category:</h1>
                </div>
                <div>
                  <h1>
                    {orderItem.User.firstName} {orderItem.User.lastName}
                  </h1>
                  <h1>{orderItem.Room.title}</h1>
                  <h1>{orderItem.id}</h1>
                  <h1>{orderItem.Room.price} บาท</h1>
                  <h1>{orderItem.Room.Category.typeProduct}</h1>
                </div>
              </div>

              {/* Payment Order */}
              {getPayments
                .filter(paymentItem => paymentItem.orderId === orderItem.id)
                .map((paymentItem, paymentIndex) => (
                  <div className="flex  flex-grow" key={paymentIndex}>
                    <div className="font-bold">
                      <h1>Credit Card Number:</h1>
                      <h1>Expiration Date:</h1>
                      <h1>CVV:</h1>
                      <h1>Zip Code:</h1>
                      <h1>Country:</h1>
                      <h1>Order ID:</h1>
                    </div>
                    <div>
                      <h1>{paymentItem.creditCardNumber}</h1>
                      <h1>{paymentItem.expirationDate}</h1>
                      <h1>{paymentItem.cvv}</h1>
                      <h1>{paymentItem.zipCode}</h1>
                      <h1>{paymentItem.country}</h1>
                      <h1>{paymentItem.orderId}</h1>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
