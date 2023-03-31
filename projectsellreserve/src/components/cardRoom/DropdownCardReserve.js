import "flowbite";
import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

export default function DropdownCardReserve() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="flex  justify-around  gap-20 p-2 border-r-2 border-l-2  border-b-2  rounded-b-xl w-full"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-bold text-[14px]">ผู้เข้าพัก</h1>
          <p className="text-[#717171]">ผู้เข้าพัก 1 คน</p>
        </div>

        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>
      {isOpen && (
        <div className="border-r-2 border-l-2  border-b-2 top-20 flex flex-col items-start rounded-lg p-2">
          <div className="w-full flex flex-col justify-between items-center">
            <div className="flex  justify-between items-center  cursor-pointer rounded-lg p-1 w-full">
              <div>
                <h1 className="font-bold text-[16px]">ผู้ใหญ่</h1>
                <p className="text-[14px]">อายุ 15 ขึ้นไป</p>
              </div>
              <div className="flex justify-around items-center w-1/2">
                <FiMinusCircle className="text-[22px] text-[#717171] hover:text-black" />
                <p className="text-[18px]">1</p>
                <FiPlusCircle className="text-[22px] text-[#717171] hover:text-black" />
              </div>
            </div>

            <div className="flex  justify-between items-center  cursor-pointer rounded-lg p-1 w-full">
              <div>
                <h1 className="font-bold text-[16px]">เด็ก</h1>
                <p className="text-[14px]">อายุ 2-12 ปี</p>
              </div>
              <div className="flex justify-around items-center w-1/2">
                <FiMinusCircle className="text-[22px] text-[#717171] hover:text-black" />
                <p className="text-[18px]">1</p>
                <FiPlusCircle className="text-[22px] text-[#717171] hover:text-black" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
