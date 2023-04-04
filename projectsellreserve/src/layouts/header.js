import "flowbite";
import profile from "../assets/blank.png";
import { BiMenu } from "react-icons/bi";
import LoginPage from "../pages/LoginPage";
import { useState } from "react";
import RegisterPage from "../pages/Register";
import { AiFillEdit, AiOutlineLogin } from "react-icons/ai";
import { FaHouseUser } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

export default function HeaderNavbar() {
  const [ModalLogin, setModalLogin] = useState(false);
  const toggleModal = async () => {
    setModalLogin(!ModalLogin);
  };
  const handleOnCloseLogin = toggleModal;

  // -----------------------------------------------

  const [ModalRegister, setModalRegister] = useState(false);

  const toggleRegister = async () => {
    setModalRegister(!ModalRegister);
  };
  const handleOnCloseRegister = toggleRegister;
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
                      onClick={toggleModal}
                      href="#"
                      className="flex items-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <i>
                        <AiOutlineLogin />
                      </i>
                      <p>เข้าสู่ระบบ</p>
                    </a>
                  </li>

                  {/* ----------------------------------- */}
                  <li>
                    <a
                      href="#"
                      onClick={toggleRegister}
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
                    href="#"
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
          {/* ---------------------- */}
          {/* navbar */}
          <form className="flex items-center  justify-center gap-20 w-6/12">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
      </nav>
      <div>
        {ModalLogin && (
          <div>
            <LoginPage handleOnCloseLogin={handleOnCloseLogin} />
          </div>
        )}
      </div>

      <div>
        {ModalRegister && (
          <div>
            <RegisterPage handleOnCloseRegister={handleOnCloseRegister} />
          </div>
        )}
      </div>
    </div>
  );
}
