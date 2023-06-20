import "flowbite";
import UserImage from "../assets/blank.png";
import { useState } from "react";
import LearnMore from "../components/modal/ModalLearnMore";
import useProduct from "../hooks/useProduct";
import { useParams } from "react-router-dom";
import GalleryRoom from "../features/GalleryRoom";
import CardButton from "../components/CardButton";
import Buttons from "../components/Buttons";
import useAuth from "../hooks/useAuth";
import Modal from "../components/modal/Modal";
import LoginForm from "../features/auth/LoginForm";
import useCart from "../hooks/useCart";
import { toast } from "react-toastify";
import CardBooking from "../features/CardBooking";

export default function ProductRoomPage() {
  const { roomId } = useParams();
  const { product } = useProduct();
  const { authenticateUser } = useAuth();
  const { handleAddcart } = useCart();

  const [openLogin, setOpenLogin] = useState(false);
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

  const handleAddToCart = async () => {
    try {
      if (authenticateUser) {
        handleAddcart(roomId);
        toast.success("สินค้าของคุณเพิ่มไปในตะกร้าแล้ว");
      } else {
        setOpenLogin(true);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  const handleAddToCardReserve = () => {
    if (!authenticateUser) {
      setOpenLogin(true);
    }
  };

  return (
    <div>
      {/* Container All */}
      <div className="w-[80%] m-auto flex flex-col gap-10 mt-5">
        {/* Container ALL 1 */}
        <div className="flex flex-col justify-center items-start gap-5 rounded-full">
          <div>
            <h1 className="font-bold text-[26px]">{selectedProduct.title}</h1>
          </div>
          <GalleryRoom roomId={roomId} />
        </div>

        {/* Container ALll 2  */}
        <div className="flex justify-center gap-20 items-start">
          {/*  BOX 1 LEFT CONTENT*/}
          <div className="flex flex-col justify-center items-start gap-10 p-2 w-1/2">
            <div className="border-b-2 pb-8">
              <p>{selectedProduct.address}</p>
            </div>

            <div className="border-b-2 pb-8">
              <p>{selectedProduct.description}</p>
            </div>

            {/* Modal */}
            <div className="w-1/2 border-b-2 pb-8 flex flex-col justify-center items-start gap-3">
              {ModalLearnMore && (
                <div>
                  <LearnMore handleOnCloseLearnMore={handleOnCloseLearnMore} />
                </div>
              )}
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

          {/*  BOX 2 RIGHT CARD-ORDER */}
          <div className="w-1/3">
            {selectedProduct.Category.typeProduct === "reserve" && (
              <CardBooking handleAddToCardReserve={handleAddToCardReserve} />
            )}

            {selectedProduct.Category.typeProduct === "seller" && (
              <CardButton>
                <Buttons onClick={handleAddToCart}>
                  <p className="text-[20px]">เพิ่มลงในตะกร้า</p>
                </Buttons>
              </CardButton>
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

      <Modal
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        title="เข้าสู่ระบบ"
      >
        <LoginForm onClose={() => setOpenLogin(false)} />
      </Modal>
    </div>
  );
}
