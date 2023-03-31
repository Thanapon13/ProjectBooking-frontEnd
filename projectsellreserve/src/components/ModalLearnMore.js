import "flowbite";
export default function LearnMore({ handleOnCloseLearnMore }) {
  return (
    <div>
      <div className="fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="relative w-[80%] h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              onClick={handleOnCloseLearnMore}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              {/* BOX 1 */}
              <div className="border-b-2 pb-4">
                <h1 className="font-bold text-[26px]">
                  <span className="text-red-500	">Air</span> Cover
                </h1>
                <p>AirCover ให้ความคุ้มครองที่ครอบคลุมฟรีในทุกการจอง</p>
              </div>

              {/* BOX 2 */}
              <div className="flex justify-center gap-10 mt-5">
                {/* BOX 2 LEFT */}
                <div className="flex flex-col justify-center gap-10">
                  <div className="flex flex-col justify-center gap-4">
                    <h1 className="font-bold text-[16px]">
                      การรับประกันคุ้มครองการจอง
                    </h1>
                    <p className="text-[#717171]">
                      ในกรณีที่เจ้าของที่พักจำเป็นต้องยกเลิกการจองภายใน 30
                      วันก่อนเช็คอิน เราจะหาที่พักคล้ายๆ กันหรือดีกว่า
                      หรือคืนเงินให้คุณ
                    </p>
                  </div>

                  <div className="flex flex-col justify-center gap-4">
                    <h1 className="font-bold text-[16px]">
                      การรับประกันความถูกต้องของที่พัก
                    </h1>
                    <p className="text-[#717171]">
                      หากพบว่าที่พักไม่เป็นไปตามที่โฆษณาไว้ตลอดการเข้าพัก เช่น
                      ตู้เย็นไม่ทำงานและเจ้าของที่พักก็ซ่อมให้ไม่ได้
                      หรือมีห้องนอนน้อยกว่าที่ระบุไว้ คุณจะต้องรายงานปัญหาภายใน
                      3 วัน แล้วเราจะหาที่พักคล้ายๆ กันหรือดีกว่าให้แทน
                      หรือคืนเงินให้คุณ
                    </p>
                  </div>
                </div>
                {/* BOX 2 RIGHT */}
                <div className="flex flex-col justify-center gap-10">
                  <div className="flex flex-col justify-center gap-4">
                    <h1 className="font-bold text-[16px]">
                      การรับประกันการเช็คอิน
                    </h1>
                    <p className="text-[#717171]">
                      หากคุณเช็คอินเข้าที่พักไม่ได้และเจ้าของที่พักแก้ไขปัญหาให้ไม่ได้
                      เราจะหาที่พักคล้ายๆ
                      กันหรือดีกว่าตามระยะเวลาเข้าพักเดิมให้แทน หรือคืนเงินคุณ
                    </p>
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <h1 className="font-bold text-[16px]">
                      สายด่วนความปลอดภัย 24 ชั่วโมง
                    </h1>
                    <p className="text-[#717171]">
                      หากรู้สึกไม่ปลอดภัย
                      ก็รับสิทธิเข้าถึงเจ้าหน้าที่ความปลอดภัยซึ่งอบรมมาเป็นพิเศษได้ก่อนใคร
                      ทั้งกลางวันและกลางคืน
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
