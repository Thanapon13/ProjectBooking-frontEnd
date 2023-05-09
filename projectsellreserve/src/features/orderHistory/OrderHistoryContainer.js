import { AiOutlineHistory } from "react-icons/ai";

export default function OrderHistoryContainer() {
  return (
    <div className="h-full flex bg-[#E5E7EB] border-b-2">
      {/* Left */}
      <div className="w-[20%]  bg-white">
        <nav>
          <button className="flex items-center justify-center py-5 shadow-sm hover:bg-gray-100">
            <h1 className="text-m text-gray-600">ดูทั้งหมด</h1>
          </button>

          <button className="flex items-center justify-center py-5 shadow-sm hover:bg-gray-100">
            <i className="text-m pr-2 text-gray-600">
              <AiOutlineHistory />
            </i>
            <h1 className="text-m text-gray-600">การซื้อของคุณ</h1>
          </button>

          <a
            href="#"
            className="flex items-center justify-center py-5 shadow-sm hover:bg-gray-100"
          >
            <i className="text-m pr-2 text-gray-600">
              <AiOutlineHistory />
            </i>
            <h1 className="text-m text-gray-600">การจองของคุณ</h1>
          </a>
        </nav>
      </div>

      {/* Right */}

      <div className="w-full h-full bg-[#E5E7EB] p-10">
        <div className="border-2 bg-white h-full">
          {/* Header */}
          <div className="w-[80%] m-auto">
            <div className="border-b-2 flex justify-center items-center p-4">
              <h1 className="font-bold text-xl">Order History</h1>
            </div>

            {/* Crad Type Reserve */}
            <div className="border-2 mt-4 p-4 flex justify-center items-center gap-6 mb-6">
              {/* Box Image */}
              <div>
                <img
                  src="https://www.ahstatic.com/photos/5451_ho_00_p_1024x768.jpg"
                  alt="img"
                  className="w-[240px]"
                />
              </div>
              {/* Box Content */}
              <div className="w-3/6 flex justify-start items-center gap-6 p-2">
                {/* Laft */}
                <div className="font-bold">
                  <h1>Custoomer :</h1>
                  <h1>Order id :</h1>
                  <h1>Check in :</h1>
                  <h1>Check out :</h1>
                  <h1>Number of guests :</h1>
                  <h1>Price :</h1>
                  <h1>Status :</h1>
                </div>
                {/* Right */}
                <div>
                  <h1>Haruka</h1>
                  <h1>123</h1>
                  <h1>10 เม.ย</h1>
                  <h1>15 เม.ย</h1>
                  <h1>5 คน</h1>
                  <h1>56,000</h1>
                  <h1>Reserve</h1>
                </div>
              </div>
            </div>

            {/* Crad Type Seller*/}
            <div className="border-2 mt-4 p-4 flex justify-center items-center gap-6 mb-6">
              {/* Box Image */}
              <div>
                <img
                  src="https://www.ahstatic.com/photos/5451_ho_00_p_1024x768.jpg"
                  alt="img"
                  className="w-[240px]"
                />
              </div>
              {/* Box Content */}
              <div className="w-3/6 flex justify-start items-center gap-6 p-2">
                {/* Laft */}
                <div className="font-bold">
                  <h1>Custoomer :</h1>
                  <h1>Product Name :</h1>
                  <h1>Order id :</h1>
                  <h1>Price :</h1>
                  <h1>Status :</h1>
                </div>
                {/* Right */}
                <div>
                  <h1>Senapi</h1>
                  <h1>124</h1>
                  <h1>product name</h1>
                  <h1>56,000</h1>
                  <h1>Seller</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
