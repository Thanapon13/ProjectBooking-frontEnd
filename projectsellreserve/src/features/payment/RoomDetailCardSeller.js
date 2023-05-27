import useCart from "../../hooks/useCart";

export default function RoomDetailCardSeller() {
  const { cart } = useCart();
  // console.log("cart:", cart);

  const totalPrice = cart.reduce(
    (total, el) => total + Number(el.Room.price),
    0
  );
  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <div className="border-2 w-[460px]  rounded-xl p-5 ">
      {cart.map((el, idx) => {
        const roomImages = JSON.parse(el.Room.roomImage);
        const firstImage =
          roomImages && roomImages.length > 0 ? roomImages[0] : null;

        const price = Number(el.Room.price);

        return (
          <div key={idx}>
            <div className="flex justify-start items-center gap-5 border-b-2 py-4 ">
              <img
                src={firstImage}
                alt="img"
                className="w-[124px] h-[106px] rounded"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">{el.Room.title}</h1>
                <h1>{el.Room.address}</h1>
                <h1>ราคา {price.toFixed(2)} บาท</h1>
              </div>
            </div>
          </div>
        );
      })}

      <div className="border-b-2 py-4">
        <h1>
          การซื้อนี้มี{" "}
          <span className="text-red-500 font-bold text-xl">ham</span>{" "}
          <span className="font-bold text-xl">cover</span> &nbsp; ปกป้อง
        </h1>
      </div>

      <div className="flex flex-col justify-center gap-4 pt-4 border-b-2 py-4">
        <h1 className="font-bold text-xl">รายละเอียดราคา</h1>

        <div className="flex justify-between items-center">
          <p>ราคารวมทั้งสิ้น</p>
          <p>{formattedTotalPrice} บาท</p>
        </div>
      </div>

      <div className="flex justify-between items-center border-b-2 py-4">
        <h1>รวม(THB)</h1>
        <h1>฿{formattedTotalPrice}</h1>
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
