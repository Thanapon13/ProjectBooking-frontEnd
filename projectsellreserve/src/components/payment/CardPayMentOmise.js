import "flowbite";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import {
  AiOutlineCaretUp,
  AiOutlineCaretDown,
  AiFillLock
} from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import DropdownCreditCard from "./DropdownCreditCard";
import ModalCountryRegion from "./ModalCountryRegion";

export default function CardPayMentOmise() {
  const [isOpen, setIsOpen] = useState(false);

  const [ModalCountry, setModalCountry] = useState(false);

  const toggleModal = async () => {
    setModalCountry(!ModalCountry);
  };

  const handleOnCloseModalCountry = toggleModal;

  return (
    <div className="mt-5 flex flex-col gap-2 border-b-2 pb-6">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        type="button"
        className="w-full cursor-pointer flex justify-between items-center border-2 rounded-lg p-4"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div className="flex justify-start items-center gap-6">
          <div>
            <i className="text-[#484848] text-lg">
              <BsFillCreditCard2BackFill />
            </i>
          </div>
          <div>
            <p className="text-[#484848] text-lg">บัตรเคดิตหรือบัตรเดบิต</p>
          </div>
        </div>

        {!isOpen ? (
          <AiOutlineCaretDown className="text-[#484848] text-lg" />
        ) : (
          <AiOutlineCaretUp className="text-[#484848] text-lg" />
        )}
      </button>
      {/* <!-- Dropdown menu --> */}
      <DropdownCreditCard />
      <div className="mb-4">
        {/* Container Top */}
        <div className="py-2 border-2 rounded-t-lg">
          <div className="flex justify-start items-center ml-4">
            <p className="text-[#484848] text-[14px]">ชื่อบัตร</p>
          </div>
          <input
            type="text"
            className="ml-4 border-none focus:outline-none focus:ring-0"
            placeholder="ชื่อบัตร"
          />
        </div>

        {/* Container Center */}
        <div className="py-2 border-2">
          <div className="flex justify-start items-center ml-4 gap-2">
            <p className="text-[#484848] text-[14px]">เลขบัตร</p>
            <i className="text-[#484848]">
              <AiFillLock />
            </i>
          </div>
          <input
            type="text"
            className="ml-4 border-none focus:outline-none focus:ring-0"
            placeholder="0000 0000 0000 0000"
          />
        </div>

        {/* Container Bottom */}
        <div className="flex">
          {/* Box left */}

          <div className="py-2 w-2/4 border-2 rounded-bl-lg">
            <div className="flex justify-start items-center ml-4">
              <p className="text-[#484848] text-[14px]">วันหมดอายุ</p>
            </div>
            <input
              placeholder="ดด / ปป"
              type="text"
              className="ml-4 border-none focus:outline-none focus:ring-0"
            />
          </div>

          {/* Box Right */}

          <div className="py-2 w-2/4 border-2 rounded-br-lg">
            <div className="flex justify-start items-center ml-4">
              <p className="text-[#484848] text-[14px]">CVV</p>
            </div>
            <input
              placeholder="123"
              type="password"
              className="ml-4 border-none focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Modal */}
        {ModalCountry && (
          <div>
            <ModalCountryRegion
              handleOnCloseModalCountry={handleOnCloseModalCountry}
            />
          </div>
        )}

        <button
          type="button"
          onClick={toggleModal}
          className="w-full border-2 rounded-lg flex justify-center items-center p-2 mt-4"
        >
          <div className="ml-4 text-start w-2/4">
            <p className="text-[#484848] text-[12px]">ประเทศ/ภูมิภาค</p>
            <h1 className="font-bold text-[14px]">ไทย</h1>
          </div>

          <div className="ml-4 text-start w-2/4 flex justify-end items-center">
            <i className="text-3xl">
              <BiChevronDown />
            </i>
          </div>
        </button>
      </div>
    </div>
  );
}
