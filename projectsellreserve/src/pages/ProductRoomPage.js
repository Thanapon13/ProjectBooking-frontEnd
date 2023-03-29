import GalleryRoom from "../components/GalleryRoom";
import UserImage from "../assets/blank.png";

export default function ProductRoomPage() {
  return (
    <div className="w-[80%] m-auto flex flex-col ">
      <div>
        {/* room title box 1 */}
        <div>
          <h1 className="font-bold text-[26px]">Room Name</h1>
        </div>
        {/* room image box 2 */}
        <div>
          <GalleryRoom />
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        {/* BOX LEFT CONTENT*/}
        <div>
          <div className="w-1/2 border-b-2">
            <h1 className="font-bold text-[22px]">AirCover</h1>
            <p>
              ทุกการจองจะได้รับความคุ้มครองฟรีในกรณีที่เจ้าของที่พักยกเลิกการจอง
              รายละเอียดที่พักไม่ถูกต้อง และมีปัญหาอื่นๆ เช่น ปัญหาในการเช็คอิน
            </p>
          </div>

          <div className="flex">
            <img className="w-8 h-8 rounded-full" src={UserImage} />
            <h1>ให้เช่าที่พักโดย : Username</h1>
          </div>
        </div>
        {/* BOX RIGHT ORDER */}
        <div className="w-1/2">
          <div>
            <h1>Order</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
