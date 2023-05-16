import "flowbite";
import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import useProduct from "../../hooks/useProduct";

export default function CardProduct() {
  const { product } = useProduct();
  console.log(product);
  const [currentIndices, setCurrentIndices] = useState(
    Array(product.length).fill(0)
  );

  const prevSlide = productIndex => {
    const isFirstSlide = currentIndices[productIndex] === 0;
    const newIndices = [...currentIndices];
    newIndices[productIndex] = isFirstSlide
      ? product[productIndex].roomImage.length - 1
      : currentIndices[productIndex] - 1;
    setCurrentIndices(newIndices);
  };

  const nextSlide = productIndex => {
    const isLastSlide =
      currentIndices[productIndex] ===
      product[productIndex].roomImage.length - 1;
    const newIndices = [...currentIndices];
    newIndices[productIndex] = isLastSlide
      ? 0
      : currentIndices[productIndex] + 1;
    setCurrentIndices(newIndices);
  };

  useEffect(() => {
    const resetIndices = () => {
      setCurrentIndices(Array(product.length).fill(0));
    };
    resetIndices();
  }, [product]);

  return (
    <div className="flex flex-wrap justify-items-start gap-4 p-4">
      {product.map((el, idx) => {
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
          <div key={idx} className="flex flex-col justify-center gap-2">
            <div className="w-[280px] h-[280px] group">
              <div
                style={{
                  backgroundImage: `url(${roomImages[currentImageIndex]})`
                }}
                className="w-full h-full rounded-2xl bg-center duration-500"
              >
                <div className="flex justify-between items-center w-[280px] h-[300px]">
                  <div className="hidden group-hover:block top-[50%] -translate-x-0 trans-y-[-5] left-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                    <BsChevronCompactLeft
                      onClick={() => prevSlide(productIndex)}
                      size={15}
                    />
                  </div>
                  <div className="hidden group-hover:block top-[50%] -translate-x-0 trans-y-[-5] right-5 text-2xl rounded-full p-2 bg-white/80 text-black cursor-pointer">
                    <BsChevronCompactRight
                      onClick={() => nextSlide(productIndex)}
                      size={15}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[14px]">
              <Link to="/productroompage" target="_blank">
                <h1 className="font-bold text-[18px]">{el.title}</h1>
                <p>{el.address}</p>
                <p>ราคาเริ่มต้น (ต่อคืน)</p>
                <p>{el.price}</p>
                <p>ประเภท: {el.categori}</p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
