import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import useCreateRoom from "../../hooks/userCreateRoom";

export default function ConfirmCreateRoom() {
  const { createRoomData } = useCreateRoom();
  console.log("createRoomData:", createRoomData);

  const [currentIndices, setCurrentIndices] = useState(
    Array(createRoomData.length).fill(0)
  );

  const prevSlide = productIndex => {
    const isFirstSlide = currentIndices[productIndex] === 0;
    const newIndices = [...currentIndices];
    newIndices[productIndex] = isFirstSlide
      ? createRoomData[productIndex].roomImage.length - 1
      : currentIndices[productIndex] - 1;
    setCurrentIndices(newIndices);
  };

  const nextSlide = productIndex => {
    const isLastSlide =
      currentIndices[productIndex] ===
      createRoomData[productIndex].roomImage.length - 1;
    const newIndices = [...currentIndices];
    newIndices[productIndex] = isLastSlide
      ? 0
      : currentIndices[productIndex] + 1;
    setCurrentIndices(newIndices);
  };

  useEffect(() => {
    const resetIndices = () => {
      setCurrentIndices(Array(createRoomData.length).fill(0));
    };
    resetIndices();
  }, [createRoomData]);

  return (
    <div className="w-[80%] flex gap-6 flex-wrap pt-10">
      {createRoomData.map((el, idx) => {
        const productIndex = idx;
        const roomImages = JSON.parse(el.roomImage);
        const getCurrentIndex = productIndex => {
          const imageCount = roomImages.length;
          const currentIndex = currentIndices[productIndex];

          if (currentIndex >= imageCount) {
            const difference = currentIndex - imageCount;
            return difference % imageCount;
          }

          return currentIndex;
        };

        const currentImageIndex = getCurrentIndex(productIndex);

        return (
          <div key={el.id} className="flex flex-col justify-center gap-2">
            <div className="flex gap-2 justify-start items-center">
              <div>
                <p>UserId:</p>
                <p>FullName:</p>
                <p>Email:</p>
              </div>

              <div>
                <p>{el.User.id}</p>
                <p>
                  {el.User.firstName} {el.User.lastName}
                </p>
                <p>{el.User.email}</p>
              </div>
            </div>
            <div className="border-2 rounded-tl-2xl rounded-tr-2xl">
              <div className="w-[280px] h-[280px] group">
                <div
                  className="w-full h-full rounded-tl-2xl rounded-tr-2xl bg-center duration-500 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${roomImages[currentImageIndex]})`,
                    transitionDuration: "500ms"
                  }}
                >
                  <div className="flex justify-between items-center w-[280px] h-[300px]">
                    <div className="hidden group-hover:block top-[50%] -translate-x-0 trans-y-[-5] left-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                      <BsChevronCompactLeft
                        size={15}
                        onClick={() => prevSlide(productIndex)}
                      />
                    </div>
                    <div className="hidden group-hover:block top-[50%] -translate-x-0 trans-y-[-5] right-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                      <BsChevronCompactRight
                        size={15}
                        onClick={() => nextSlide(productIndex)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[14px] max-w-[280px] flex flex-grow flex-col justify-center items-center p-2">
                <h1 className="font-bold text-[18px]">{el.title}</h1>
                <p className="line-clamp-3">{el.address}</p>
                <p>ราคาเริ่มต้น (ต่อคืน)</p>
                <p>
                  {parseFloat(el.price).toLocaleString(undefined, {
                    minimumFractionDigits: 2
                  })}{" "}
                  บาท
                </p>

                <p>ประเภท: {el.Category.typeProduct}</p>
              </div>

              <div className="flex justify-center items-center gap-6">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  ConfirmedCreate
                </button>

                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
