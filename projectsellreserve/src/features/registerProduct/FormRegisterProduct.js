import LabelRegisterProduct from "../../components/LabelRegisterProduct";
import InputRegisterProduct from "../../components/input/inputRegisterProduct";
import UploadFileRoomImage from "./UploadFileRoomImage";

export default function FormRegisterProduct() {
  return (
    <>
      <div className="bg-white w-[50%]">
        <form className="p-10 flex flex-col gap-2">
          {/* upload file */}
          <div className="mb-6">
            <UploadFileRoomImage />
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <InputRegisterProduct
              name="floating_name"
              id="floating_name"
              placeholder=" "
            />

            <LabelRegisterProduct htmlFor="floating_name">
              {" "}
              ขื่อห้อง
            </LabelRegisterProduct>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <InputRegisterProduct
              name="floating_price"
              id="floating_price"
              placeholder=" "
            />

            <LabelRegisterProduct htmlFor="floating_price">
              {" "}
              ราคา
            </LabelRegisterProduct>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <InputRegisterProduct
              name="repeat_password"
              id="floating_repeat_password"
              placeholder=" "
            />

            <LabelRegisterProduct htmlFor="floating_repeat_password">
              {" "}
              ที่อยู่
            </LabelRegisterProduct>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <InputRegisterProduct
              name="floating_first_name"
              id="floating_first_name"
              placeholder=" "
            />

            <LabelRegisterProduct htmlFor="floating_first_name">
              {" "}
              คำอธิบาย
            </LabelRegisterProduct>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <InputRegisterProduct
                name="floating_phone"
                id="floating_phone"
                placeholder=" "
              />

              <LabelRegisterProduct htmlFor="floating_phone">
                {" "}
                ประะภทของห้อง
              </LabelRegisterProduct>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <InputRegisterProduct
                name="floating_last_name"
                id="floating_last_name"
                placeholder=" "
              />

              <LabelRegisterProduct htmlFor="floating_last_name">
                {" "}
                จังหวัด
              </LabelRegisterProduct>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
