import "flowbite";
import UserImage from "../assets/blank.png";
import { useState } from "react";
import LearnMore from "../components/ModalLearnMore";
import CardReserve from "../components/cardRoom/CardReserve";
import CardSeller from "../components/cardRoom/CardSeller";
import useProduct from "../hooks/useProduct";
import { useParams } from "react-router-dom";
import GalleryRoom from "../features/GalleryRoom";

export default function ProductRoomPage() {
  const { roomId } = useParams();
  const { product } = useProduct();

  // console.log("roomId:", roomId);
  // console.log("product:", product);

  const [ModalLearnMore, setModalLearnMore] = useState(false);

  const toggleModal = async () => {
    setModalLearnMore(!ModalLearnMore);
  };
  const handleOnCloseLearnMore = toggleModal;

  // ถ้าาเอาจาก useParam ถึงเราจะส่ง number มาก็จะแปลงเป็น string
  const selectedProduct = product.find(el => el.id === +roomId);
  // console.log("selectedProduct", selectedProduct);

  if (!selectedProduct) {
    return <div>ไม่พบสินค้าที่คุณเลือก</div>;
  }

  return (
    <div>
      <div className="w-[80%] m-auto flex flex-col gap-10 mt-5">
        <div className="flex flex-col justify-center items-start gap-5 rounded-full">
          {/* room title box 1 */}
          <div>
            <h1 className="font-bold text-[26px]">{selectedProduct.title}</h1>
          </div>

          {/* room image box 2 */}

          <GalleryRoom roomId={roomId} />
        </div>

        <div className="flex justify-center gap-20 items-start">
          {/* BOX LEFT CONTENT*/}
          <div className="flex flex-col justify-center items-start gap-10 p-2 w-1/2">
            <div className="border-b-2 pb-8">
              <p>{selectedProduct.description}</p>
            </div>

            {/* Modal */}
            {ModalLearnMore && (
              <div>
                <LearnMore handleOnCloseLearnMore={handleOnCloseLearnMore} />
              </div>
            )}
            <div className="w-1/2 border-b-2 pb-8 flex flex-col justify-center items-start gap-3">
              <h1 className="font-bold text-[26px]">
                <span className="text-red-500	">Air</span> Cover
              </h1>
              <p>
                ทุกการจองจะได้รับความคุ้มครองฟรีในกรณีที่เจ้าของที่พักยกเลิกการจอง
                รายละเอียดที่พักไม่ถูกต้อง และมีปัญหาอื่นๆ เช่น
                ปัญหาในการเช็คอิน
              </p>
              <button
                className="underline font-bold cursor-pointer"
                onClick={toggleModal}
              >
                ดูข้อมูลเพิ่มเติม
              </button>
            </div>
            <div className="w-1/2 flex border-b-2 pb-8">
              <img className="w-8 h-8 rounded-full" src={UserImage} alt="img" />
              <h1>ให้เช่าที่พักโดย : Username</h1>
            </div>
          </div>

          {/* BOX RIGHT CARD-ORDER */}
          <div className="w-1/3">
            {selectedProduct.Category.typeProduct === "reserve" && (
              <CardReserve />
            )}
            {selectedProduct.Category.typeProduct === "seller" && (
              <CardSeller />
            )}
          </div>
        </div>
      </div>

      <div className="w-1/2 m-auto">
        <div className="w-1/2">
          <h1>Google Map</h1>
        </div>

        <div className="w-1/2">
          <h1>ติดต่อเจ้าของที่พัก</h1>
        </div>
      </div>
    </div>
  );
}
