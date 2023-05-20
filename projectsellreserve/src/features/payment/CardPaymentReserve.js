export default function CardPaymentReserve() {
  return (
    <div className="border-2 w-[460px] h-[460px] rounded-xl p-5">
      <div className="flex justify-start items-center gap-5  border-b-2 py-4">
        <img src={""} alt="img" className="w-[124px] h-[106px] rounded" />

        <h1>Product Name</h1>
      </div>
      <div className="border-b-2 py-4">
        <h1>
          การจองนี้มี <span className="text-red-500	font-bold text-xl">ari</span>{" "}
          <span className="font-bold text-xl">cover</span> &nbsp; ปกป้อง
        </h1>
      </div>
      <div className="flex flex-col justify-center gap-4 pt-4 border-b-2 py-4">
        <h1 className="font-bold text-xl">รายละเอียดราคา</h1>

        <div className="flex justify-between items-center">
          <p>฿75,016 x 5 คืนs</p>
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
  );
}
