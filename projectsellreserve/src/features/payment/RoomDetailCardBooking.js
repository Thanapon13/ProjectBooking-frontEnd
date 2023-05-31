import useBooking from "../../hooks/useBooking";
import { BsFillTrash3Fill } from "react-icons/bs";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function RoomDetailCardBooking() {
  const navigate = useNavigate();
  const { booking, handleDeleteBooking } = useBooking();
  console.log("bookingss", booking);

  const handelDeleteBooking = roomId => {
    handleDeleteBooking(roomId);
    navigate(0);
  };

  return (
    <div>
      {booking.map((el, idx) => (
        <div className="border-2 w-[460px] rounded-xl p-5" key={idx}>
          <div className="flex">
            <div className="flex justify-start items-center gap-5 border-b-2 py-4">
              <img
                src={el.Room.roomImage}
                alt="img"
                className="w-[124px] h-[106px] rounded"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">{el.Room.title}</h1>
                <h1>{el.Room.address}</h1>
                <h1>ราคาต่อคืน {el.Room.price} บาท</h1>
              </div>
            </div>
            <i
              className="text-xl mr-4 hover:text-red-600 cursor-pointer"
              onClick={() => handelDeleteBooking(el.Room.id)}
            >
              <BsFillTrash3Fill />
            </i>
          </div>

          <div className="border-b-2 py-4">
            <h1>
              การจองนี้มี{" "}
              <span className="text-red-500 font-bold text-xl">ham</span>{" "}
              <span className="font-bold text-xl">cover</span> &nbsp; ปกป้อง
            </h1>
          </div>

          <div className="flex flex-col justify-center gap-4 pt-4 border-b-2 py-4">
            <h1 className="font-bold text-xl">รายละเอียดราคา</h1>
            <div className="flex justify-between items-center">
              <p>
                ฿ {el.Room.price} x{" "}
                {moment(el.endDate).diff(el.startDate, "days")} คืน
              </p>
              <p>
                ฿{" "}
                {el.Room.price * moment(el.endDate).diff(el.startDate, "days")}{" "}
                บาท
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-base">ค่าบริการ HamBooking</p>
              <p>฿1,500 บาท</p>
            </div>
          </div>

          <div className="flex justify-between items-center border-b-2 py-4">
            <h1>รวม(THB)</h1>
            <h1>
              ฿{" "}
              {el.Room.price * moment(el.endDate).diff(el.startDate, "days") +
                1500}{" "}
              บาท
            </h1>
          </div>

          <div className="p-4">
            <p>
              ที่พักนี้ต้องวางเงินประกันความเสียหายจำนวน ฿9,238.57
              ซึ่งเจ้าของที่พักจะแยกเก็บก่อนที่คุณจะมาถึงหรือตอนเช็คอิน
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
