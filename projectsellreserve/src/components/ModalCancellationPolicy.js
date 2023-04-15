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
            <div className="px-6 py-6 lg:px-8">
              <div>
                <p>ยกเลิกก่อน</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
