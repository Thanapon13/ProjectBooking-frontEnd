import React, { useState } from "react";
import ConfirmOrderUser from "../features/admin/ConfirmOrderUser";
import ConfirmCreateRoom from "../features/admin/ConfirmCreateRoom";
import { AiOutlineHistory } from "react-icons/ai";
import useAuth from "../hooks/useAuth";
import useCreateRoom from "../hooks/userCreateRoom";

export default function AdminPage() {
  const { paymentUser } = useAuth();
  const { createRoomData } = useCreateRoom();
  // console.log("paymentUser:", paymentUser);
  // console.log("createRoomData:", createRoomData);

  const [viewAll, setViewAll] = useState("ConfirmOrderUser");
  // console.log("viewAll:", viewAll);

  const handleViewAll = view => {
    setViewAll(view);
  };

  let filter = [];

  if (viewAll === "ConfirmOrderUser") {
    filter = paymentUser;
  } else if (viewAll === "ConfirmCreateRoom") {
    filter = createRoomData;
  }

  return (
    <div>
      {/*BOX-TOP Header */}
      <div className="border-2 flex flex-col justify-center items-center p-2">
        <h1 className="text-2xl font-bold">Admin</h1>
        <h1 className="text-xl font-bold">รอการอนุมัติ</h1>
      </div>

      {/* BOX BOTTOM Content */}
      <div className="flex">
        {/* Navbar */}
        <div className="w-[20%] bg-white">
          <nav>
            <button
              className={`w-full flex items-center justify-center py-5 shadow-sm hover:bg-gray-100 ${
                viewAll === "ConfirmOrderUser" ? "bg-gray-100" : ""
              }`}
              onClick={() => handleViewAll("ConfirmOrderUser")}
            >
              <i className="text-m pr-2 text-gray-600">
                <AiOutlineHistory />
              </i>
              <h1 className="text-m text-gray-600">ConfirmOrderUser</h1>
            </button>

            <button
              className={`w-full flex items-center justify-center py-5 shadow-sm hover:bg-gray-100 ${
                viewAll === "ConfirmCreateRoom" ? "bg-gray-100" : ""
              }`}
              onClick={() => handleViewAll("ConfirmCreateRoom")}
            >
              <i className="text-m pr-2 text-gray-600">
                <AiOutlineHistory />
              </i>
              <h1 className="text-m text-gray-600">ConfirmCreateRoom</h1>
            </button>
          </nav>
        </div>

        <div className="w-[80%]">
          <div className="flex flex-col justify-center items-center">
            {/* Order User  */}
            {viewAll === "ConfirmOrderUser" && <ConfirmOrderUser />}
            {viewAll === "ConfirmCreateRoom" && <ConfirmCreateRoom />}
          </div>
        </div>
      </div>
    </div>
  );
}
