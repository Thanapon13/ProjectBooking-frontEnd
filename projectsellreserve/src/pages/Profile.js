import profileUser from "../assets/blank.png";
import { AiOutlineHistory } from "react-icons/ai";
import EditProfile from "../components/EditProfile";
export default function ProfilePage() {
  return (
    <div className="flex bg-[#E5E7EB] border-b-2">
      {/* Left */}
      <div className=" w-[20%]  bg-white">
        <div className="flex justify-start items-center gap-10 p-2 border-b-2">
          <div>
            <img
              alt="img"
              src={profileUser}
              className="w-[80px] rounded-full"
            />
          </div>
          <div>
            <h1 className="font-bold text-[20px]">User Name</h1>
          </div>
        </div>

        <nav>
          <a
            href="#"
            className="flex items-center justify-center py-5 shadow-sm hover:bg-gray-100"
          >
            <i className="text-m pr-2 text-gray-600">
              <AiOutlineHistory />
            </i>
            <h1 className="text-m text-gray-600">การซื้อของคุณ</h1>
          </a>

          <a
            href="#"
            className="flex items-center justify-center py-5 shadow-sm hover:bg-gray-100"
          >
            <i className="text-m pr-2 text-gray-600">
              <AiOutlineHistory />
            </i>
            <h1 className="text-m text-gray-600">การจองของตุณ</h1>
          </a>
        </nav>
      </div>

      {/* Right */}
      <div className="w-[60%] m-auto">
        <div className="bg-white m-10 p-10">
          <div className="flex justify-end items-end">
            <EditProfile />
          </div>

          <img src={profileUser} className="h-40 w-40 rounded-full border-2" />
          <div className="flex">
            <div className="mt-8 mx-5 space-y-3 text-md font-bold w-1/5 text-gray-600">
              <p>First Name :</p>
              <p>Last Name :</p>
              <p>Email Address :</p>
              <p>Mobile :</p>
              <p>Address :</p>
              <p>Line Token :</p>
            </div>
            <div className="mt-8 mx-5 space-y-3 text-md text-md">
              <p>Haruka</p>
              <p>senpai</p>
              <p>Email Address</p>
              <p>Mobile</p>
              <p>Address</p>
              <p>Line Token</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
