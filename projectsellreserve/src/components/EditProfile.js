import "flowbite";
import profileUser from "../assets/blank.png";
import { AiFillEdit } from "react-icons/ai";
export default function EditProfile() {
  return (
    <div>
      <div class="text-center">
        <button
          class="flex justify-end items-end"
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
        class="fixed top-0 right-0 z-40 w-[500px] h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
        tabindex="-1"
        aria-labelledby="drawer-right-label"
      >
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close menu</span>
        </button>

        <div className="text-center mt-5 mx-5">
          <button className="flex justify-around">
            <img
              src={profileUser}
              className="m-auto h-20 w-20 rounded-full border text-gray-600"
            />

            <input
              type="file"
              className="text-xs text-grey-500
              hover:file:cursor-pointer hover:file:bg-grey-300
              hover:file:text-blue-500 m-auto w-1/2
            "
            />
          </button>
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            className=" block w-full bg-gray-100 text-gray-900 text-xs border-none"
            placeholder="FirstName"
            autocomplete="off"
          />
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Last Name
          </label>
          <input
            type="text"
            name="fname"
            className=" block w-full bg-gray-100 text-gray-900 text-xs border-none"
            placeholder="LastName"
            autocomplete="off"
          />
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Email Address
          </label>
          <input
            type="text"
            name="emailaddress"
            className=" block w-full bg-gray-100 text-gray-900 text-xs border-none"
            placeholder=" EmailAddress"
            autocomplete="off"
          />
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Mobile
          </label>
          <input
            type="text"
            name="fname"
            className=" block w-full bg-gray-100 text-gray-900 text-xs border-none"
            placeholder=" Mobile"
            autocomplete="off"
          />
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Address
          </label>
          <input
            type="text"
            name="address"
            className=" block w-full bg-gray-100 text-gray-900 text-xs border-none"
            placeholder=" Mobile"
            autocomplete="off"
          />
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Line Token
          </label>
          <input
            type="text"
            name="address"
            className=" block w-full bg-gray-100 text-gray-900 text-xs border-none"
            placeholder=" linetoken"
            autocomplete="off"
          />
        </div>

        <div className="flex justify-center">
          <button className="bg-green-600 hover:bg-green-500 px-4 py-2 mr-3 text-sm text-white">
            save
          </button>
          <button
            type="button"
            className="bg-gray-400 hover:bg-gray-300 px-3 py-1 text-sm text-white"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}
