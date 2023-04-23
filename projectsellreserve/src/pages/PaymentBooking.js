import { useState } from "react";
import CardPayMentOmise from "../components/payment/CardPayMentOmise";
import Footer from "../layouts/footer";
import { AiOutlineLeft } from "react-icons/ai";
import CancellationPolicy from "../components/ModalCancellationPolicy";
export default function PaymentBooking() {
  const cardOrder = [
    {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/160b4c17-1db0-4659-ad98-c81567b4ed6c.jpeg?im_w=1200"
    }
  ];

  const [ModalCancellationPolicy, setModalCancellationPolicy] = useState(false);
  const toggleModal = async () => {
    setModalCancellationPolicy(!ModalCancellationPolicy);
  };
  const handleOnCloseCancellationPolicy = toggleModal;
  return (
    <div>
      {/* Header */}
      <nav className="bg-white border-gray-200 px-2 sm:px-4 p-6 rounded dark:bg-gray-900 border-b-2">
        <div className="container flex flex-wrap items-center justify-between mx-auto ">
          {/* logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://1417094351.rsc.cdn77.org/articles/8850/8849289/thumbnail/large.gif?1"
              className="h-6 mr-3 sm:h-9 rounded-full"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Brand
            </span>
          </a>
        </div>
      </nav>
      {/* ---------------------- */}
      <div className="w-[80%] m-auto mt-8 flex justify-between items-start">
        {/* Left Container */}
        <div className=" w-[50%] flex flex-col gap-4">
          {/* Header */}
          <div className="flex justify-start items-center gap-4">
            <i className="cursor-pointer hover:bg-gray-100 rounded-full p-2">
              <AiOutlineLeft />
            </i>
            <h1 className="font-bold text-3xl">ขอจอง</h1>
          </div>

          {/* BOX ข้อมูลการจอง */}
          <div className="mt-10 border-b-2 pb-6">
            <h1 className="font-bold text-xl">การเดินทางของคุณ</h1>

            {/* วันที่ */}
            <div className="flex justify-between mt-5">
              <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="font-bold">วันที่</h1>
                <p>7-12 เม.ย</p>
              </div>
              <div>
                <button
                  type="button"
                  className="hover:underline underline-offset-1"
                >
                  <h1 className="font-bold text-[16px]">เปลี่ยน</h1>
                </button>
              </div>
            </div>

            {/* ผู้เข้าพัก */}
            <div className="flex justify-between mt-5">
              <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="font-bold">ผู้เข้าพัก</h1>
                <p>ผู้เข้าพัก 1 คน</p>
              </div>
              <div>
                <button
                  type="button"
                  className="hover:underline underline-offset-1"
                >
                  <h1 className="font-bold text-[16px]">แก้ไข</h1>
                </button>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-xl">จ่ายด้วย</h1>
            <CardPayMentOmise />
          </div>

          <div>
            <div className="flex flex-col gap-4 mt-2 border-b-2 pb-6">
              <h1 className="font-bold text-2xl">นโยบายยกเลิกการจอง</h1>
              <div>
                <p>
                  <span className="font-bold text-base">
                    ยกเลิกฟรีภายใน 48 ชั่วโมง
                  </span>{" "}
                  ยกเลิกก่อนวันที่ 13 ส.ค. เพื่อรับเงินคืนบางส่วน
                </p>
                {/* Modal */}
                {ModalCancellationPolicy && (
                  <CancellationPolicy
                    handleOnCloseCancellationPolicy={
                      handleOnCloseCancellationPolicy
                    }
                  />
                )}
                <button
                  className="font-bold underline text-base"
                  onClick={toggleModal}
                >
                  ดูข้อมูลเพิ่มเติม
                </button>
              </div>
            </div>

            <div className="border-b-2 mt-6 pb-6 p-2 flex flex-col justify-center items-start gap-4">
              <div>
                <h1 className="font-bold text-xl">กฎพื้นฐาน</h1>
              </div>

              <div>
                <p>
                  เราขอให้ผู้เข้าพักทุกคนระลึกถึงคุณสมบัติที่ดีของผู้เข้าพักเพียงไม่กี่ข้อ
                </p>
              </div>

              <ul className="list-disc ml-4 text-[14px]">
                <li>ปฏิบัติตามกฎของที่พัก</li>
                <li>ดูแลที่พักของโฮสต์เหมือนเป็นบ้านของคุณเอง</li>
              </ul>
            </div>
            <div className="mb-20 mt-6">
              <button
                type="button"
                className="w-[30%] text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm p-4 text-center mr-2 mb-2 mt-5"
              >
                <p className="text-[20px]">ยืนยันการชำระเงิน</p>
              </button>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------- */}
        {/* Right Container */}
        <div className="w-[50%] flex justify-center items-center">
          <div className="border-2 w-[460px] rounded-xl p-5">
            <div className="flex justify-start items-center gap-5  border-b-2 py-4">
              {cardOrder.map((el, idx) => (
                <img
                  src={el.url}
                  alt="img"
                  key={idx}
                  className="w-[124px] h-[106px] rounded"
                />
              ))}
              <h1>Product Name</h1>
            </div>

            <div className="border-b-2 py-4">
              <h1>
                การจองนี้มี{" "}
                <span className="text-red-500	font-bold text-xl">ari</span>{" "}
                <span className="font-bold text-xl">cover</span> &nbsp; ปกป้อง
              </h1>
            </div>

            <div className="flex flex-col justify-center gap-4 pt-4 border-b-2 py-4">
              <h1 className="font-bold text-xl">รายละเอียดราคา</h1>

              <div className="flex justify-between items-center">
                <p>฿75,016 x 5 คืน</p>
                <p>฿75,081.89</p>
              </div>
            </div>

            <div className="flex justify-between items-center border-b-2 py-4">
              <h1>รวม(THB)</h1>
              <h1>฿86,746.51</h1>
            </div>

            <div className="p-4">
              <p>
                ที่พักนี้ต้องวางเงินประกันความเสียหายจำนวน ฿9,238.57
                ซึ่งเจ้าของที่พักจะแยกเก็บก่อนที่คุณจะมาถึงหรือตอนเช็คอิน
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
