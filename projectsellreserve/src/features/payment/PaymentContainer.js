import { BiChevronLeft } from "react-icons/bi";
import EditBooking from "./EditBooking";
import CardPaymentReserve from "./CardPaymentReserve";
import FormPayment from "./FormPayment";

export default function PaymentContainer() {
  return (
    <div className="flex justify-center">
      {/* Container Left */}

      <div className=" w-5/12 border-2 p-2">
        {/* Header */}

        <div className="flex items-center gap-6 mt-10">
          <i className="text-3xl cursor-pointer hover:rounded-full hover:bg-gray-200">
            <BiChevronLeft />
          </i>
          <h1 className="text-[30px] font-bold">ยืนยันและชำระเงิน</h1>
        </div>

        <div className="w-[90%] m-auto">
          <EditBooking />

          <FormPayment />
        </div>
      </div>

      {/* Container Right */}
      <div className="border-2 w-5/12 flex justify-center items-center">
        <CardPaymentReserve />
      </div>
    </div>
  );
}
