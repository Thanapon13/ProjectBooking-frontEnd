export default function EditBooking() {
  return (
    <div className="mt-10 border-b-2 pb-6">
      <h1 className="font-bold text-xl">การเดินทางของคุณ</h1>

      {/* วันที่ */}
      <div className="flex justify-between mt-5">
        <div className="flex flex-col justify-center items-start gap-2">
          <h1 className="font-bold">วันที่</h1>
          <p>7-12 เม.ย</p>
        </div>
        <div>
          <button type="button" className="hover:underline underline-offset-1">
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
          <button type="button" className="hover:underline underline-offset-1">
            <h1 className="font-bold text-[16px]">แก้ไข</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
