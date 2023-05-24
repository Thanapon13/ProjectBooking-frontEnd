import { FaLock } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import SelectCardCountry from "./SelectCardCountry";
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import DivFormPayment from "../../components/DivFormPayment";

export default function FormPayment({
  onCreditCardNumberChange,
  onExpirationDateChange,
  onCvvChange,
  onZipCodeChange,
  onCountryChange
}) {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  return (
    <>
      <div className="mt-5 flex flex-col justify-center gap-4">
        <h1 className="font-bold text-[22px]">จ่ายด้วย</h1>

        <form className="flex flex-col gap-4 border-b-2 pb-6">
          <DivFormPayment
            name="floating_text"
            id="floating_text"
            htmlFor="floating_text"
            onChange={onCreditCardNumberChange}
          >
            เลขบัตร
            <i>
              <FaLock />
            </i>
          </DivFormPayment>

          <div className="grid md:grid-cols-2 md:gap-6">
            <DivFormPayment
              name="floating_first_name"
              id="floating_first_name"
              htmlFor="floating_first_name"
              onChange={onExpirationDateChange}
            >
              วันหมดอายุ
            </DivFormPayment>

            <DivFormPayment
              name="floating_last_name"
              id="floating_last_name"
              htmlFor="floating_last_name"
              onChange={onCvvChange}
            >
              CVV
            </DivFormPayment>
          </div>

          <DivFormPayment
            name="floating_first_name"
            id="floating_first_name"
            htmlFor="floating_first_name"
            onChange={onZipCodeChange}
          >
            รหัสไปรษณีย์
          </DivFormPayment>

          <div
            className="flex items-center border-2 p-2 rounded-lg cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <div className="w-[90%]">
              <p className="text-[10px] text-gray-400">ประเทศ/ภูมิภาค</p>
              <p className="text-[16px]">{selectedCountry}</p>
            </div>

            <div className="w-[10%]">
              <i className="text-[30px]">
                <BiChevronDown />
              </i>
            </div>
          </div>
        </form>
      </div>

      <Modal
        title="ประเทศ/ภูมิภาค"
        style={{ width: "500px" }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <SelectCardCountry
          setSelectedCountry={setSelectedCountry}
          onCountryChange={onCountryChange}
          onClose={() => setOpen(false)}
        />
      </Modal>
    </>
  );
}
