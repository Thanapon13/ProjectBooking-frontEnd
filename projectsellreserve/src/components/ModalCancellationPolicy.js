import "flowbite";

export default function CancellationPolicy({
  handleOnCloseCancellationPolicy
}) {
  return (
    <div>
      <div className="fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="relative w-[40%] h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Container Header  Top*/}
            <div className="p-4 flex flex-col gap-4">
              <button
                type="button"
                onClick={handleOnCloseCancellationPolicy}
                className="w-[30px] text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div>
                <h1 className="font-bold text-2xl">นโยบายยกเลิกการจอง</h1>
              </div>
            </div>

            {/* Container Bottom*/}
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
        </div>
      </div>
    </div>
  );
}
