import { AiOutlineHistory } from "react-icons/ai";
export default function NavbarOrderHistory() {
  return (
    <>
      <div className="w-[20%] bg-white">
        <nav>
          <button className="w-full flex items-center justify-center py-5 shadow-sm hover:bg-gray-100">
            <h1 className="text-m text-gray-600">ดูทั้งหมด</h1>
          </button>

          <button className="w-full flex items-center justify-center py-5 shadow-sm hover:bg-gray-100">
            <i className="text-m pr-2 text-gray-600">
              <AiOutlineHistory />
            </i>
            <h1 className="text-m text-gray-600">การซื้อของคุณ</h1>
          </button>

          <button className="w-full flex items-center justify-center py-5 shadow-sm hover:bg-gray-100">
            <i className="text-m pr-2 text-gray-600">
              <AiOutlineHistory />
            </i>
            <h1 className="text-m text-gray-600">การจองของคุณ</h1>
          </button>
        </nav>
      </div>
    </>
  );
}
