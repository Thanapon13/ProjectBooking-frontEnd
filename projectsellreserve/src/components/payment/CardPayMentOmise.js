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

        <div className="relative">
          <input
            type="text"
            id="outlined_success"
            aria-describedby="outlined_success_help"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-gray-400 peer"
            placeholder="ชื่อบัตร"
          />{" "}
          <label
            htmlFor="outlined_success"
            className="absolute text-sm text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            ชื่อบัตร
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="outlined_success"
            aria-describedby="outlined_success_help"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-gray-400 peer"
            placeholder="0000 "
          />{" "}
          <label
            htmlFor="outlined_success"
            className="flex justify-start items-center absolute text-sm text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            เลขบัตร{" "}
            <i className="text-[#484848]">
              <AiFillLock />
            </i>
          </label>
        </div>

        <div className="flex">
          {/* Box Left
           */}
          <div className="relative">
            <input
              type="text"
              id="outlined_success"
              aria-describedby="outlined_success_help"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-gray-400 peer"
              placeholder="ดด / ปป "
            />{" "}
            <label
              htmlFor="outlined_success"
              className="absolute text-sm text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              วันหมดอายุ
            </label>
          </div>
          {/* Box Right */}
          <div className="relative">
            <input
              type="text"
              id="outlined_success"
              aria-describedby="outlined_success_help"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-gray-400 peer"
              placeholder="123 "
            />{" "}
            <label
              htmlFor="outlined_success"
              className="absolute text-sm text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              CVV
            </label>
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
