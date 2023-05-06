import "flowbite";
import { AiFillEdit } from "react-icons/ai";
import { useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Avatar from "../../components/Avatar";
import InputEditProfile from "../../components/input/InputEditProfile";

export default function EditProfileForm() {
  const {
    authenticateUser: { profileImage }
  } = useAuth();

  const [file, setFile] = useState(null);

  const inputEl = useRef();

  return (
    <div>
      <div className="text-center">
        <button
          className="flex justify-end items-end"
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          <p className="text-xl pr-1 text-gray-600">Edit</p>
          <i className="text-xl text-gray-600">
            <AiFillEdit />{" "}
          </i>
        </button>
      </div>

      {/* <!-- drawer component --> */}
      <div
        id="drawer-right-example"
        className="fixed top-0 right-0 z-40 w-[500px] h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="mt-5 mx-5 flex flex-col justify-center items-center gap-3">
          <Avatar
            src={file ? URL.createObjectURL(file) : profileImage}
            size={"120"}
            onClick={() => inputEl.current.click()}
          />

          <button
            className="py-1.5 px-4 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => inputEl.current.click()}
          >
            <p>เลือกไฟล์</p>

            <input
              type="file"
              ref={inputEl}
              className="hidden"
              onChange={e => {
                // console.dir(e.target, "aa");
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
              // multiple สามารถ input file ได้หลายอันใน 1 input
              // multiple
            />
          </button>
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            First Name
          </label>

          <InputEditProfile
            name="fname"
            placeholder="FirstName"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="lname" className="block text-xs text-gray-900">
            Last Name
          </label>

          <InputEditProfile
            name="lname"
            placeholder="LastName"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Email Address
          </label>
          <InputEditProfile
            name="emailaddress"
            placeholder="EmailAddress"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Mobile
          </label>

          <InputEditProfile
            name="mobile"
            placeholder="Mobile"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Address
          </label>

          <InputEditProfile
            name="address"
            placeholder="Address"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Line Token
          </label>

          <InputEditProfile
            name="lineToken"
            placeholder="LineToken"
            autoComplete="off"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="bg-green-600 hover:bg-green-500 px-4 py-2 mr-3 text-sm text-white"
          >
            save
          </button>
          <button
            type="button"
            // data-drawer-hide="drawer-right-example"
            onClick={() => {
              setFile(null);
              inputEl.current.value = null;
            }}
            className="bg-gray-400 hover:bg-gray-300 px-3 py-1 text-sm text-white"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}
