import useProduct from "../hooks/useProduct";

export default function GalleryRoom({ roomId }) {
  const { product } = useProduct();

  const selectedProduct = product.find(el => el.id === +roomId);
  if (!selectedProduct) {
    return <div>ไม่พบสินค้าที่คุณเลือก</div>;
  }

  const roomImages = JSON.parse(selectedProduct.roomImage);

  return (
    <div>
      <div className="flex gap-3 cursor-pointer">
        {/* Image Left */}
        <div className="rounded-s-3xl">
          <img
            alt="img"
            className="w-[600px] h-[382px] rounded-l-xl"
            src={roomImages[0]}
          ></img>
        </div>
        {/* Image Right */}
        <div className="flex gap-3">
          {/* Right box 1 */}
          <div className="flex flex-col gap-3 ">
            <img
              alt="img"
              className="w-[300px] h-[185px]"
              src={roomImages[1]}
            ></img>
            <img
              alt="img"
              className="w-[300px] h-[185px]"
              src={roomImages[2]}
            ></img>
          </div>

          {/* Right box 2 */}
          <div className="flex flex-col gap-3 ">
            <img
              alt="img"
              className="w-[300px] h-[185px] rounded-t-xl"
              src={roomImages[3]}
            ></img>
            <img
              alt="img"
              className="w-[300px] h-[185px] rounded-br-xl"
              src={roomImages[4]}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
