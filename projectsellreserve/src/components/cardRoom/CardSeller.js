export default function CardSeller() {
  return (
    <div>
      <div className="border-2 p-4 rounded-xl bg-white shadow-lg shadow-indigo-500/40">
        <div className="flex gap-2 justify-start items-center mb-2">
          <h1 className="text-[18px]">
            <span className="font-bold text-[20px]">ราคา 11,111</span> บาท
          </h1>
        </div>

        <button
          type="button"
          className="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm p-4 text-center mr-2 mb-2 mt-5"
        >
          <p className="text-[20px]">กดใส่ตระกร้า</p>
        </button>
      </div>
    </div>
  );
}
