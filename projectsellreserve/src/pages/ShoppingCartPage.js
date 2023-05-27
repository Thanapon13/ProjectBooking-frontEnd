import "flowbite";
import { BsFillTrash3Fill } from "react-icons/bs";
import useCart from "../hooks/useCart";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ShoppingCartPage() {
  const { cart, handleDeleteRoom } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cart.forEach(item => {
        const price = parseFloat(item.Room.price);
        total += price;
      });
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [cart]);

  const handleDeleteRooms = roomId => {
    handleDeleteRoom(roomId);
    navigate(0);
  };

  return (
    <div className="bg-slate-100 flex justify-center gap-5 py-10">
      {/* Box 1 Left */}
      <div className="w-[50%] mt-10">
        {/* Top */}
        <div className="border-2 p-5 bg-white rounded">
          <h1 className="text-xl">ตระกร้าของท่าน ({cart.length} รายการ)</h1>
        </div>

        {/* Bottom */}
        {cart.map((item, index) => {
          const roomImages = JSON.parse(item.Room.roomImage);
          const firstImage =
            roomImages && roomImages.length > 0 ? roomImages[0] : null;

          return (
            <div
              key={index}
              className="border-2 py-4 pl-4 bg-white flex justify-between mt-6 cursor-pointer rounded"
            >
              <div className="flex gap-3">
                {firstImage && (
                  <img src={firstImage} alt="img" className="w-[150px]" />
                )}
                <div className="flex flex-col justify-between">
                  <p>{item.Room.title}</p>
                  <p>{item.Room.address}</p>
                  <p>ราคา {item.Room.price} ฿</p>
                  <p>ประเภท : {item.Room.categoryId}</p>
                </div>
              </div>

              <i
                className="text-xl mr-4 hover:text-red-600"
                onClick={() => handleDeleteRooms(item.Room.id)} // ส่ง roomId เข้าไปใน handleDeleteRooms
              >
                <BsFillTrash3Fill />
              </i>
            </div>
          );
        })}
      </div>

      {/* Box 1 Right */}
      <div className="w-[30%] mt-10">
        <div className="border-2 bg-white p-5 rounded flex flex-col gap-4">
          <div>
            <p>ราคารวมทั้งสิ้น</p>
            <p>฿ {totalPrice.toFixed(2)} บาท</p>
          </div>

          {cart.length > 0 ? (
            <Link to="/paymentOrderPage">
              <button
                type="button"
                className="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                ยืนยันการสั่งซื้อ
              </button>
            </Link>
          ) : (
            <div className="border-2 p-5 bg-white rounded">
              <h1 className="text-xl">ตระกร้าของท่าน (ไม่มีสินค้า)</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
