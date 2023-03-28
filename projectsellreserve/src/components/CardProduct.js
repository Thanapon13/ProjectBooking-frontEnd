import "flowbite";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
export default function CardProduct() {
  const slides = [
    {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/160b4c17-1db0-4659-ad98-c81567b4ed6c.jpeg?im_w=1200"
    },
    {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/e6afe269-b0c7-468d-b93c-ea55b6592cf2.jpeg?im_w=720"
    },
    {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/f0d9b54f-5395-4d79-bc40-ac06fb772e83.jpeg?im_w=720"
    },
    {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/f0d9b54f-5395-4d79-bc40-ac06fb772e83.jpeg?im_w=1200"
    },
    {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/48dafd6f-65ec-4891-8a85-df07ee8b9829.jpeg?im_w=720"
    },
    {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/b6a3aa5f-cbbb-4e50-9e86-e68e3e7add27.jpeg?im_w=1200"
    },
    {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/9bf3bca7-7afc-4ca4-be9c-e42a10abd068.jpeg?im_w=720"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex flex-wrap justify-items-start gap-4 p-4">
      {/* car allt */}
      <div className="flex flex-col justify-center gap-2">
        {/* image box 1 */}

        <div className="w-[280px] h-[300px]  group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center duration-500"
          >
            {/* Arrow */}
            <div className="flex justify-between items-center w-[280px] h-[300px] ">
              {/* Left  Arrow*/}
              <div className="hidden group-hover:block  top-[50%] -translate-x-0 trans-y-[-5] left-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={15} />
              </div>
              {/* Rigth  Arrow*/}
              <div className="hidden group-hover:block  top-[50%] -translate-x-0 trans-y-[-5] right-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={15} />
              </div>
            </div>
          </div>
        </div>

        {/* content box 2*/}

        <div className="text-[14px]">
          <h1 className="font-bold	text-[18px]">Samui ไทย</h1>
          <p>ธนบุรี, กรุงเทพ, ไทย</p>
          <p>ราคาเริ่มต้น (ต่อคืน)</p>
          <p>THB 14,000</p>
        </div>
      </div>

      {/*---------------------------- */}

      <div className="flex flex-col justify-center gap-2">
        {/* image box 1 */}

        <div className="w-[280px] h-[300px]  group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center duration-500"
          >
            {/* Arrow */}
            <div className="flex justify-between items-center w-[280px] h-[300px] ">
              {/* Left  Arrow*/}
              <div className="hidden group-hover:block  top-[50%] -translate-x-0 trans-y-[-5] left-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={15} />
              </div>
              {/* Rigth  Arrow*/}
              <div className="hidden group-hover:block  top-[50%] -translate-x-0 trans-y-[-5] right-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={15} />
              </div>
            </div>
          </div>
        </div>

        {/* content box 2*/}

        <div className="text-[14px]">
          <h1 className="font-bold	text-[18px]">Samui ไทย</h1>
          <p>ธนบุรี, กรุงเทพ, ไทย</p>
          <p>ราคาเริ่มต้น (ต่อคืน)</p>
          <p>THB 14,000</p>
        </div>
      </div>

      {/*---------------------------- */}

      <div className="flex flex-col justify-center gap-2">
        {/* image box 1 */}

        <div className="w-[280px] h-[300px]  group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center duration-500"
          >
            {/* Arrow */}
            <div className="flex justify-between items-center w-[280px] h-[300px] ">
              {/* Left  Arrow*/}
              <div className="hidden group-hover:block  top-[50%] -translate-x-0 trans-y-[-5] left-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={15} />
              </div>
              {/* Rigth  Arrow*/}
              <div className="hidden group-hover:block  top-[50%] -translate-x-0 trans-y-[-5] right-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={15} />
              </div>
            </div>
          </div>
        </div>

        {/* content box 2*/}

        <div className="text-[14px]">
          <h1 className="font-bold	text-[18px]">Samui ไทย</h1>
          <p>ธนบุรี, กรุงเทพ, ไทย</p>
          <p>ราคาเริ่มต้น (ต่อคืน)</p>
          <p>THB 14,000</p>
        </div>
      </div>

      {/*---------------------------- */}

      <div className="flex flex-col justify-center gap-2">
        {/* image box 1 */}

        <div className="w-[280px] h-[300px]  group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center duration-500"
          >
            {/* Arrow */}
            <div className="flex justify-between items-center w-[280px] h-[300px] ">
              {/* Left  Arrow*/}
              <div className="hidden group-hover:block  top-[50%] -translate-x-0 trans-y-[-5] left-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={15} />
              </div>
              {/* Rigth  Arrow*/}
              <div className="hidden group-hover:block  top-[50%] -translate-x-0 trans-y-[-5] right-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={15} />
              </div>
            </div>
          </div>
        </div>

        {/* content box 2*/}

        <div className="text-[14px]">
          <h1 className="font-bold	text-[18px]">Samui ไทย</h1>
          <p>ธนบุรี, กรุงเทพ, ไทย</p>
          <p>ราคาเริ่มต้น (ต่อคืน)</p>
          <p>THB 14,000</p>
        </div>
      </div>

      {/*---------------------------- */}

      <div className="flex flex-col justify-center gap-2">
        {/* image box 1 */}

        <div className="w-[280px] h-[300px]  group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center duration-500"
          >
            {/* Arrow */}
            <div className="flex justify-between items-center w-[280px] h-[300px] ">
              {/* Left  Arrow*/}
              <div className="hidden group-hover:block  top-[50%] -translate-x-0 trans-y-[-5] left-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={15} />
              </div>
              {/* Rigth  Arrow*/}
              <div className="hidden group-hover:block  top-[50%] -translate-x-0 trans-y-[-5] right-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={15} />
              </div>
            </div>
          </div>
        </div>

        {/* content box 2*/}

        <div className="text-[14px]">
          <h1 className="font-bold	text-[18px]">Samui ไทย</h1>
          <p>ธนบุรี, กรุงเทพ, ไทย</p>
          <p>ราคาเริ่มต้น (ต่อคืน)</p>
          <p>THB 14,000</p>
        </div>
      </div>

      {/*---------------------------- */}

      <div className="flex flex-col justify-center gap-2">
        {/* image box 1 */}

        <div className="w-[280px] h-[300px]  group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center duration-500"
          >
            {/* Arrow */}
            <div className="flex justify-between items-center w-[280px] h-[300px] ">
              {/* Left  Arrow*/}
              <div className="hidden group-hover:block  top-[50%] -translate-x-0 trans-y-[-5] left-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={15} />
              </div>
              {/* Rigth  Arrow*/}
              <div className="hidden group-hover:block  top-[50%] -translate-x-0 trans-y-[-5] right-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={15} />
              </div>
            </div>
          </div>
        </div>

        {/* content box 2*/}

        <div className="text-[14px]">
          <h1 className="font-bold	text-[18px]">Samui ไทย</h1>
          <p>ธนบุรี, กรุงเทพ, ไทย</p>
          <p>ราคาเริ่มต้น (ต่อคืน)</p>
          <p>THB 14,000</p>
        </div>
      </div>

      {/*---------------------------- */}

      <div className="flex flex-col justify-center gap-2">
        {/* image box 1 */}

        <div className="w-[280px] h-[300px]  group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center duration-500"
          >
            {/* Arrow */}
            <div className="flex justify-between items-center w-[280px] h-[300px] ">
              {/* Left  Arrow*/}
              <div className="hidden group-hover:block  top-[50%] -translate-x-0 trans-y-[-5] left-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={15} />
              </div>
              {/* Rigth  Arrow*/}
              <div className="hidden group-hover:block  top-[50%] -translate-x-0 trans-y-[-5] right-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={15} />
              </div>
            </div>
          </div>
        </div>

        {/* content box 2*/}

        <div className="text-[14px]">
          <h1 className="font-bold	text-[18px]">Samui ไทย</h1>
          <p>ธนบุรี, กรุงเทพ, ไทย</p>
          <p>ราคาเริ่มต้น (ต่อคืน)</p>
          <p>THB 14,000</p>
        </div>
      </div>
    </div>
  );
}
