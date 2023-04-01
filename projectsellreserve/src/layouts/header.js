import "flowbite";
import profile from "../assets/blank.png";
import { BiMenu } from "react-icons/bi";
import LoginPage from "../pages/LoginPage";
import { useState } from "react";
import RegisterPage from "../pages/Register";

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
              Ham
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
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      เข้าสู่ระบบ
                    </a>
                  </li>

                  {/* ----------------------------------- */}
                  <li>
                    <a
                      href="#"
                      onClick={toggleRegister}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      ลงทะเบียน
                    </a>
                  </li>
                </div>
                <li>
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    บัญชีผู้ใช้
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    ประวัติการสั่งซื้อ
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    ออกจากระบบ
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
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
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
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
