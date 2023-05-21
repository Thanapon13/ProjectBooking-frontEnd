export default function CancellationPolicy() {
  return (
    <div>
      <div className="px-6 py-6 lg:px-8">
        {/* Box Top */}
        <div>
          <p className="font-bold">ยกเลิกก่อน</p>
        </div>

        {/* Box Bottom */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 p-2 mt-2 border-b-2 pb-4">
            <div>
              <h1 className="font-bold">29 เม.ย.</h1>
              <p className="text-[12px]">10.00</p>
            </div>
            <div className="ml-20">
              <p>คืนเงินเต็มจำนวน: รับเงินคืน 100% ของยอดที่จ่ายไป</p>
            </div>
          </div>

          <div className="flex gap-2 p-2 mt-2 border-b-2 pb-4">
            <div className="w-[100px]">
              <h1 className="font-bold">30 เม.ย.</h1>
              <p className="text-[12px]">10.00</p>
              <p className="text-[12px]">(เช็คอิน)</p>
            </div>
            <div className="ml-20">
              <p>
                คืนเงินบางส่วน: รับเงินคืนสำหรับทุกคืน ยกเว้นคืนแรก
                ไม่มีการคืนเงินค่าที่พักคืนแรกหรือค่าบริการ
              </p>
            </div>
          </div>
        </div>

        <a href="/CancellationPoliciesPage" target="_blank">
          <button
            type="button"
            className="pt-6 pb-6 font-bold text-[14px] underline"
          >
            ดูข้อมูลเพิ่มเติมเกี่ยวกับนโยบายยกเลิกการจอง
          </button>
        </a>
      </div>
    </div>
  );
}
