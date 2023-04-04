import "flowbite";

import CardCartPage from "../components/CardCartPage";
import ModalShoppingCartPage from "../components/ModalShoppingCartPage";
export default function ShoppingCartPage() {
  return (
    <div className="h-screen bg-slate-100 flex  gap-2 flex-col justify-items-start">
      <div className="p-10 flex flex-col justify-center gap-5 border-b-2">
        {/* BOX 1 TOP */}

        <div className="border-b-2 p-2 flex justify-between items-center">
          <h1 className="font-bold text-[24px]">Shopping Cart</h1>
          <p>You have 4 items in your cart</p>
        </div>

        <div className="flex justify-between items-center ">
          <div className="flex justify-center items-center gap-6 w-[20%]">
            <h1 className="font-bold text-[16px]">Room Image</h1>
            <div>
              <h1 className="font-bold text-[16px]">Room Name</h1>
            </div>
          </div>

          <div className="flex justify-between items-center w-[70%] p-2">
            <div className="flex justify-center items-center p-2 w-[20%]">
              <h1 className="font-bold text-[16px]">Quantity</h1>
            </div>
            <div className="p-2 w-[20%] text-center">
              <h1 className="font-bold text-[16px]">Price</h1>
            </div>
            <div className="p-2 w-[20%] text-center">
              <h1 className="font-bold text-[16px]">Total</h1>
            </div>
            <h1 className="font-bold text-[16px]">Delete</h1>
          </div>
        </div>

        {/* BOX 2 Bottom */}
        <div>
          <CardCartPage />
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 mt-5">
        <ModalShoppingCartPage />
      </div>
    </div>
  );
}
