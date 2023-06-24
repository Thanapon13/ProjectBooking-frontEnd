import { Button, Spin, Upload } from "antd";
import LabelRegisterProduct from "../../components/LabelRegisterProduct";
import InputRegisterProduct from "../../components/input/inputRegisterProduct";
import { useState } from "react";

export default function FormRegisterProduct() {
  const [createRoom, setCreateRoom] = useState({
    roomImage: "",
    title: "",
    price: "",
    address: "",
    description: "",
    categoryId: "",
    provinceId: ""
  });
  console.log("createRoom:", createRoom);

  // onChange Input CreateRoom
  const handleCreateRoomFormSummit = e => {
    try {
      e.preventDefault();

      const fieldName = e.target.getAttribute("name");
      const fieldValue = e.target.value;

      const newFormData = { ...createRoom };
      newFormData[fieldName] = fieldValue;

      console.log("newFormData:", newFormData);

      setCreateRoom(newFormData);
    } catch (err) {
      console.log("handleCreateRoomFormSummit", err);
    }
  };

  return (
    <>
      <div className="bg-white w-[50%]">
        <form className="p-10 flex flex-col gap-2">
          {/* upload file */}
          <div className="mb-6">
            <Upload.Dragger
              multiple={true}
              listType="picture"
              // action={"http://localhost:3000"}
              showUploadList={{ showRemoveIcon: true }}
              accept=".png,.jpeg,.doc"
              beforeUpload={file => {
                console.log({ file }, "file");
                return true;
              }}
              iconRender={() => {
                return <Spin></Spin>;
              }}
              progress={{
                strokeWidth: 3,
                strokeColor: {
                  "0%": "#f0f",
                  "100%": "#ff0"
                },
                style: { top: 12, left: 10 }
              }}
            >
              ลากไฟล์มาที่นี่หรือ
              <br />
              <Button>คลิกอัปโหลด</Button>
            </Upload.Dragger>
          </div>

          <div className="relative z-0 w-full mb-6 group ">
            <InputRegisterProduct
              name="title"
              value={createRoom.title}
              onChange={handleCreateRoomFormSummit}
              id="title"
              placeholder=" "
            />

            <LabelRegisterProduct> ขื่อห้อง</LabelRegisterProduct>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <InputRegisterProduct
              name="price"
              value={createRoom.price}
              onChange={handleCreateRoomFormSummit}
              id="price"
              placeholder=" "
            />

            <LabelRegisterProduct htmlFor="price"> ราคา</LabelRegisterProduct>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <InputRegisterProduct
              name="address"
              value={createRoom.address}
              onChange={handleCreateRoomFormSummit}
              id="address"
              placeholder=" "
            />

            <LabelRegisterProduct> ที่อยู่</LabelRegisterProduct>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <InputRegisterProduct
              name="description"
              value={createRoom.description}
              onChange={handleCreateRoomFormSummit}
              id="description"
              placeholder=" "
            />

            <LabelRegisterProduct> คำอธิบาย</LabelRegisterProduct>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <InputRegisterProduct
                name="categoryId"
                value={createRoom.categoryId}
                onChange={handleCreateRoomFormSummit}
                id="categoryId"
                placeholder=" "
              />

              <LabelRegisterProduct> ประะภทของห้อง</LabelRegisterProduct>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <InputRegisterProduct
                name="provinceId"
                value={createRoom.provinceId}
                onChange={handleCreateRoomFormSummit}
                id="province"
                placeholder=" "
              />

              <LabelRegisterProduct> จังหวัด</LabelRegisterProduct>
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
