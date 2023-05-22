import { FaLock } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import SelectCardCountry from "./SelectCardCountry";
import Modal from "../../components/modal/Modal";
import { useState } from "react";

export default function FormPayment() {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  return (
    <>
      <div className="mt-5 flex flex-col justify-center gap-4">
        <h1 className="font-bold text-[22px]">จ่ายด้วย</h1>

        <form className="flex flex-col gap-4 border-b-2 pb-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              autoComplete="off"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_text"
              className="flex items-center gap-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              เลขบัตร
              <i>
                <FaLock />
              </i>
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                วันหมดอายุ
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                CVV
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              รหัสไปรษณีย์
            </label>
          </div>

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
          onClose={() => setOpen(false)}
        />
      </Modal>
    </>
  );
}
