import { TiPlus } from "react-icons/ti";
import { RiDeleteBin6Fill } from "react-icons/ri";
export default function CardCartPage() {
  const cardImage = [
    {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/160b4c17-1db0-4659-ad98-c81567b4ed6c.jpeg?im_w=1200"
    }
  ];
  return (
    <div>
      <div className="flex flex-col gap-4 shadow-lg shadow-gray-500/40 ">
        {/* card */}

        <div className="bg-white p-5 rounded-xl flex justify-between items-center">
          <div className="flex justify-center items-center gap-6 w-[20%]">
            {cardImage.map((el, idx) => (
              <img
                key={idx}
                className="w-[150px] h-[150px] rounded-xl"
                src={el.url}
              />
            ))}
            <div>
              <div>
                <h1>Title</h1>
              </div>
              <p>Address</p>
            </div>
          </div>

          <div className="flex justify-between items-center w-[70%] p-2">
            <div className="flex justify-between items-center p-2 w-[20%]">
              {" "}
              <i className="cursor-pointer text-[20px] active:text-red-600">
                <TiPlus />{" "}
              </i>
              <h1 className="font-bold text-[18px] border-2 px-4 py-2 rounded-xl">
                1
              </h1>
              <img
                className="w-[20px] cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/512/4096/4096251.png"
              />
            </div>

            <div className="p-2 w-[20%] text-center">
              <h1 className="font-bold text-[20px]">฿ 5,000 บาท</h1>
            </div>

            <div className="p-2 w-[20%] text-center">
              <h1 className="font-bold text-[20px]">Total</h1>
            </div>

            <i className="flex justify-center items-center">
              <RiDeleteBin6Fill className="text-[30px] text-red-500 cursor-pointer" />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
