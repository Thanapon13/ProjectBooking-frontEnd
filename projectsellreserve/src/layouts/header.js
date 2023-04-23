import "flowbite";
import profile from "../assets/blank.png";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { AiFillEdit, AiOutlineLogin } from "react-icons/ai";
import { FaHouseUser } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import Search from "../features/Search";
import Modal from "../components/Modal";
import RegisterForm from "../features/auth/RegisterForm";
import LoginForm from "../features/auth/LoginForm";

export default function HeaderNavbar() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRejister, setOpenRejister] = useState(false);

  return (
    <div className="border border-b-slate-200">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto ">
          {/* logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://1417094351.rsc.cdn77.org/articles/8850/8849289/thumbnail/large.gif?1"
              className="h-6 mr-3 sm:h-9 rounded-full"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Brand
            </span>
          </a>
          {/* ---------------------- */}
          {/* ---------------------- */}
          {/* ProfileUser */}
          <div className="flex items-center border-2 justify-between p-1 rounded-[50px] w-[100px] md:order-2 ">
            <i className="text-3xl ">
              <BiMenu />
            </i>
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>

              <img
                className="w-8 h-8 rounded-full"
                src={profile}
                alt="user photo"
              />
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Haruka Senpai
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                  harukasenpais@gmail.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <div className="border-b-2 border-slate-100">
                  {/* // <!-- Modal toggle --> */}
                  <li>
                    <a
                      onClick={() => setOpenLogin(true)}
                      href="#"
                      className="flex items-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <i>
                        <AiOutlineLogin />
                      </i>
                      <p>เข้าสู่ระบบ</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      onClick={() => setOpenRejister(true)}
                      className="flex items-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <img
                        alt="registerLogo"
                        src="https://cdn-icons-png.flaticon.com/512/6998/6998768.png"
                        className="w-[15px] h-[15px]"
                      />
                      <p>ลงทะเบียน</p>
                    </a>
                  </li>
                </div>
                <li>
                  <a
                    href="/profile"
                    className="flex items-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <i>
                      <FaHouseUser />{" "}
                    </i>
                    <p>บัญชีผู้ใช้</p>
                  </a>
                </li>

                <li>
                  <a
                    href="/cartpage"
                    className="flex items-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <i>
                      <BsFillCartFill />
                    </i>
                    <p>ตะกร้าสินค้าของคุณ</p>
                  </a>
                </li>

                <li>
                  <a
                    href="/orderhistory"
                    className="flex items-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <i>
                      <AiFillEdit />
                    </i>
                    <p>ประวัติการสั่งซื้อ</p>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <i>
                      <MdLogout />
                    </i>
                    <p>ออกจากระบบ</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ---------------------- */}
          {/* navbar */}
          <Search />
        </div>
      </nav>

      <Modal
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        title="เข้าสู่ระบบ"
      >
        <LoginForm onClose={() => setOpenLogin(false)} />
      </Modal>

      <Modal
        open={openRejister}
        onClose={() => setOpenRejister(false)}
        title="สมัครสมาชิก"
      >
        <RegisterForm onClose={() => setOpenRejister(false)} />
      </Modal>
    </div>
  );
}
