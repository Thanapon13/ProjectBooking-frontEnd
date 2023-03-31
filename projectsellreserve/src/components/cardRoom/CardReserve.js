import Calendar from "./Calendar";
import DropdownCardReserve from "./DropdownCardReserve";

export default function CardReserve() {
  return (
    <div className="w-4/5">
      <div className="border-2 p-4 rounded-xl bg-white shadow-lg shadow-indigo-500/40">
        <div className="flex gap-2 justify-start items-center">
          <h1 className="text-[18px]">
            <span className="font-bold text-[20px]">฿11,111</span> คืน
          </h1>
        </div>
        <div className=" flex justify-between items-center">
          <button
            type="button"
            className="flex flex-col p-2 border-2 rounded-tl-xl w-[50%]"
          >
            <h1 className="font-bold text-[14px]">เช็คอิน</h1>
            <p className="text-[#717171]">เพิ่มวันที่</p>
          </button>
          <button
            type="button"
            className="flex flex-col p-2 border-r-2 border-t-2 border-b-2 rounded-tr-xl w-[50%]"
          >
            <h1 className="font-bold text-[14px]">เช็คเอาท์</h1>
            <p className="text-[#717171]">เพิ่มวันที่</p>
          </button>
        </div>
        <DropdownCardReserve />

        <button type="button" className="border-2">
          adas
        </button>
      </div>

      {/* <Calendar /> */}
    </div>
  );
}
