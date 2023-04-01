import GalleryRoom from "../components/GalleryRoom";
import UserImage from "../assets/blank.png";
import { useState } from "react";
import LearnMore from "../components/ModalLearnMore";
import CardReserve from "../components/cardRoom/CardReserve";

export default function ProductRoomPage() {
  const [ModalLearnMore, setModalLearnMore] = useState(false);

  const toggleModal = async () => {
    setModalLearnMore(!ModalLearnMore);
  };
  const handleOnCloseLearnMore = toggleModal;
  return (
    <div>
      <div className="w-[80%] m-auto flex flex-col gap-10">
        <div className="flex flex-col justify-center items-start gap-5">
          {/* room title box 1 */}
          <div>
            <h1 className="font-bold text-[26px]">Room Name</h1>
          </div>

          {/* room image box 2 */}
          <GalleryRoom />
        </div>

        <div className="flex justify-between items-center w-full">
          {/* BOX LEFT CONTENT*/}
          <div className="flex flex-col justify-center items-start gap-10 p-2">
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
              <a
                className="underline font-bold cursor-pointer"
                onClick={toggleModal}
              >
                ดูข้อมูลเพิ่มเติม
              </a>
            </div>

            <div className="w-1/2 flex border-b-2 pb-8">
              <img className="w-8 h-8 rounded-full" src={UserImage} />
              <h1>ให้เช่าที่พักโดย : Username</h1>
            </div>
          </div>
          {/* BOX RIGHT ORDER */}
          <div className="w-1/2">
            <CardReserve />
          </div>
        </div>
      </div>
      {/* ----------------------------- */}
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
