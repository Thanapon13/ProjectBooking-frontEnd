import "flowbite";
import DropdownCardReserve from "./DropdownCardReserve";
import Calendar from "./Calendar";
import { useState } from "react";
import Modal from "../Modal";
import LoginForm from "../../features/auth/LoginForm";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function CardReserve() {
  const { authenticatedUser } = useAuth();

  const [ModalCardReserve, setModalCardReserve] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  // const navigate = useNavigate();

  // const openModalLogin = () => {
  //   if (!authenticatedUser) {
  //     setOpenLogin(true);
  //   }
  // };

  const toggleRegister = async () => {
    setModalCardReserve(!ModalCardReserve);
  };
  const handleOnCloseCardReserve = toggleRegister;

  return (
    <div className="w-4/5">
      <div className="border-2 p-4 rounded-xl bg-white shadow-lg shadow-indigo-500/40">
        <div className="flex gap-2 justify-start items-center mb-2">
          <h1 className="text-[18px]">
            <span className="font-bold text-[20px]">฿11,111</span> คืน
          </h1>
        </div>
        <div className=" flex justify-between items-center relative">
          {ModalCardReserve && (
            <Calendar handleOnCloseCardReserve={handleOnCloseCardReserve} />
          )}
          <button
            type="button"
            onClick={toggleRegister}
            className="flex flex-col p-2 border-2 rounded-tl-xl w-[50%]"
          >
            <h1 className="font-bold text-[14px]">เช็คอิน</h1>
            <p className="text-[#717171]">เพิ่มวันที่</p>
          </button>
          <button
            type="button"
            onClick={toggleRegister}
            className="flex flex-col p-2 border-r-2 border-t-2 border-b-2 rounded-tr-xl w-[50%]"
          >
            <h1 className="font-bold text-[14px]">เช็คเอาท์</h1>
            <p className="text-[#717171]">เพิ่มวันที่</p>
          </button>
        </div>
        <DropdownCardReserve />
        <a href="/paymentbooking">
          <button
            type="button"
            // onClick={openModalLogin}
            className="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm p-4 text-center mr-2 mb-2 mt-5"
          >
            <p className="text-[20px]">จอง</p>
          </button>
        </a>
      </div>
      <Modal
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        title="เข้าสู่ระบบ"
      >
        <LoginForm onClose={() => setOpenLogin(false)} />
      </Modal>
    </div>
  );
}
