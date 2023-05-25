import CardOrderTyepeSeller from "./CardOrderTyepeSeller";
import CardOrderTypeBooking from "./CardOrderTypeBooking";

export default function OrderHistory() {
  return (
    <>
      <div className="w-full h-full bg-[#E5E7EB] p-10">
        <div className="border-2 bg-white h-full">
          {/* Header */}
          <div className="w-[90%] m-auto">
            <div className="border-b-2 flex justify-center items-center p-4">
              <h1 className="font-bold text-xl">Order History</h1>
            </div>

            {/* Crad Type Reserve */}
            <CardOrderTypeBooking />

            {/* Crad Type Seller*/}
            <CardOrderTyepeSeller />
          </div>
        </div>
      </div>
    </>
  );
}
