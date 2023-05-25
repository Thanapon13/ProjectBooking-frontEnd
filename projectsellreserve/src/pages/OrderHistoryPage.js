import NavbarOrderHistory from "../features/orderHistory/NavbarOrderHistory";
import OrderHistory from "../features/orderHistory/OrderHistory";

export default function OrderHistoryPage() {
  return (
    <div className="h-full flex bg-[#E5E7EB] border-b-2">
      <NavbarOrderHistory />
      <OrderHistory />
    </div>
  );
}
