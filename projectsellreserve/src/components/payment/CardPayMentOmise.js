import "flowbite";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { useState } from "react";
import DropdownCreditCard from "./DropdownCreditCard";

export default function CardPayMentOmise() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-5 flex flex-col justify-center items-center gap-4">
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
    </div>
  );
}
