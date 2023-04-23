import "flowbite";
import { BsFillTrash3Fill } from "react-icons/bs";

export default function ShoppingCartPage() {
  const imagerooms = [
    {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/160b4c17-1db0-4659-ad98-c81567b4ed6c.jpeg?im_w=1200"
    }
  ];
  return (
    <div className="h-screen bg-slate-100 flex justify-center gap-5">
      {/* Box 1 Left */}
      <div className="w-[50%] mt-10">
        {/* Top */}
        <div className="border-2 p-5 bg-white rounded">
          <h1 className="text-xl">ตระกร้าของท่าน (1 รายการ)</h1>
        </div>

        {/* Bottom */}
        <div className="border-2  py-4 pl-4 bg-white flex justify-between mt-6 cursor-pointer rounded">
          <div className="flex gap-3">
            {imagerooms.map((el, idx) => (
              <img src={el.url} alt="img" key={idx} className="w-[150px]" />
            ))}
            <div className="flex flex-col justify-between">
              <p>เดอะ ควอเตอร์ เพลินจิต โฮเทล บาย ยูเอชจี </p>
              <p>address</p>
              <p>ราคา 20000 ฿</p>
              <p>ประเภท : ซื้อ</p>
            </div>
          </div>

          <i className="text-xl mr-4">
            <BsFillTrash3Fill />
          </i>
        </div>
      </div>

      {/* Box 1 Right */}
      <div className="w-[30%] mt-10">
        <div className="border-2 bg-white p-5 rounded flex flex-col gap-4">
          <div>
            <p>ราคารวมทั้งสิ้น</p>
            <p>฿ 20000</p>
          </div>
          <button
            type="button"
            className="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            ยืนยันการสั่งซื้อ
          </button>
        </div>
      </div>
    </div>
  );
}
