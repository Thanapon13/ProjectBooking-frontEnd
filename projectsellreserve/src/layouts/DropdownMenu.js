import "flowbite";
import profile from "../assets/blank.png";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { AiFillEdit, AiOutlineLogin } from "react-icons/ai";
import { FaHouseUser } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Modal from "../components/Modal";
import RegisterForm from "../features/auth/RegisterForm";
import LoginForm from "../features/auth/LoginForm";

export default function DropdownMenu() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRejister, setOpenRejister] = useState(false);
  const { authenticateUser, logout } = useAuth();
  return (
    <>
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
          {authenticateUser ? (
            <img
              className="w-8 h-8 rounded-full"
              src="https://1417094351.rsc.cdn77.org/articles/8850/8849289/thumbnail/large.gif?1"
              alt="profile"
            />
          ) : (
            <img className="w-8 h-8 rounded-full" src={profile} alt="profile" />
          )}
        </button>

        {/* <!-- Dropdown menu --> */}

        <div
          className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
        >
          {authenticateUser ? (
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Haruka Senpai
              </span>
              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                harukasenpais@gmail.com
              </span>
            </div>
          ) : null}

          <ul className="py-2" aria-labelledby="user-menu-button">
            <div
              className={`${
                authenticateUser ? "border-b-2 border-slate-100" : null
              }`}
            >
              {/* // <!-- Modal toggle --> */}
              {!authenticateUser ? (
                <div>
                  <li>
                    <button
                      onClick={() => setOpenLogin(true)}
                      className="w-full flex items-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <i>
                        <AiOutlineLogin />
                      </i>
                      <p>เข้าสู่ระบบ</p>
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => setOpenRejister(true)}
                      className="w-full flex items-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <img
                        alt="registerLogo"
                        src="https://cdn-icons-png.flaticon.com/512/6998/6998768.png"
                        className="w-[15px] h-[15px]"
                      />
                      <p>ลงทะเบียน</p>
                    </button>
                  </li>
                </div>
              ) : null}
            </div>
            {authenticateUser ? (
              <div>
                <li>
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <i>
                      <FaHouseUser />{" "}
                    </i>
                    <p>บัญชีผู้ใช้</p>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/cartpage"
                    className="flex items-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <i>
                      <BsFillCartFill />
                    </i>
                    <p>ตะกร้าสินค้าของคุณ</p>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/orderhistory"
                    className="flex items-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <i>
                      <AiFillEdit />
                    </i>
                    <p>ประวัติการสั่งซื้อ</p>
                  </Link>
                </li>

                <li>
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <i>
                      <MdLogout />
                    </i>
                    <p>ออกจากระบบ</p>
                  </button>
                </li>
              </div>
            ) : null}
          </ul>
        </div>

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
    </>
  );
}
