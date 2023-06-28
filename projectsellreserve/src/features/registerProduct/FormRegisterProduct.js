import { Button, Spin, Upload } from "antd";
import { createRoom } from "../../apis/product-api";
import useProvince from "../../hooks/useProvince";
import useAuth from "../../hooks/useAuth";
import useLoading from "../../hooks/useLoading";
import LabelRegisterProduct from "../../components/LabelRegisterProduct";
import InputRegisterProduct from "../../components/input/inputRegisterProduct";
import { useRef, useState } from "react";

export default function FormRegisterProduct() {
  const { province } = useProvince();
  // console.log("province:", province);
  const { authenticateUser } = useAuth();
  // console.log("authenticateUser:", authenticateUser);

  const { startLoading, stopLoading } = useLoading();

  const [files, setFiles] = useState(null);
  console.log("files:", files);

  const inputEl = useRef();

  const [createRoomData, setCreateRoomData] = useState({
    title: "",
    price: "",
    address: "",
    description: "",
    categoryId: "",
    provinceId: ""
  });
  console.log("createRoom:", createRoomData);

  // onChange Input CreateRoom
  const handleCreateRoomFormChange = e => {
    try {
      e.preventDefault();

      const fieldName = e.target.getAttribute("name");
      const fieldValue = e.target.value;

      const newFormData = { ...createRoomData };
      newFormData[fieldName] = fieldValue;

      console.log("newFormData:", newFormData);

      setCreateRoomData(newFormData);
    } catch (err) {
      console.log("handleCreateRoomFormSummit", err);
    }
  };

  // Create Room
  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      startLoading();

      let formData = new FormData();

      formData.append("title", createRoomData.title);
      formData.append("price", createRoomData.price);
      formData.append("address", createRoomData.address);
      formData.append("description", createRoomData.description);
      formData.append("categoryId", createRoomData.categoryId);
      formData.append("provinceId", createRoomData.provinceId);
      console.log("authenticateUser:", authenticateUser);
      formData.append("userId", authenticateUser?.id || "");

      for (let i = 0; i < files.length; i++) {
        formData.append("roomImage", files[i]);
      }

      console.log("formDataRoomImage:", formData.getAll("roomImage"));
      console.log("formDataUserId:", formData.get("userId"));
      console.log("formDataTitle:", formData.get("title"));
      console.log("formDataPrice:", formData.get("price"));
      console.log("formDataAddress:", formData.get("address"));
      console.log("formDataDescription:", formData.get("description"));
      console.log("formDataCategoryId:", formData.get("categoryId"));
      console.log("formDataProvinceId:", formData.get("provinceId"));

      console.log("formData:", formData);

      await createRoom(formData);

      setCreateRoomData({
        title: "",
        price: "",
        address: "",
        description: "",
        categoryId: "",
        provinceId: ""
      });
      setFiles(null);
      stopLoading();
    } catch (err) {
      console.log("Create Error", err);
    }
  };

  return (
    <>
      <div className="bg-white w-[50%]">
        <form onSubmit={handleSubmitForm} className="p-10 flex flex-col gap-2">
          {/* upload file */}
          <div className="mb-6 flex flex-col gap-2">
            <Upload.Dragger
              multiple={true}
              listType="picture"
              showUploadList={{ showRemoveIcon: true }}
              accept=".png,.jpeg,.doc"
              beforeUpload={() => false} // Disable automatic upload
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
              onChange={({ fileList }) => {
                const files = fileList.map(file => file.originFileObj);
                setFiles(files);
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
              value={createRoomData.title}
              onChange={handleCreateRoomFormChange}
              id="title"
              placeholder=" "
            />

            <LabelRegisterProduct> ขื่อห้อง</LabelRegisterProduct>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <InputRegisterProduct
              name="price"
              value={createRoomData.price}
              onChange={handleCreateRoomFormChange}
              id="price"
              placeholder=" "
            />

            <LabelRegisterProduct htmlFor="price"> ราคา</LabelRegisterProduct>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <InputRegisterProduct
              name="address"
              value={createRoomData.address}
              onChange={handleCreateRoomFormChange}
              id="address"
              placeholder=" "
            />

            <LabelRegisterProduct> ที่อยู่</LabelRegisterProduct>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <InputRegisterProduct
              name="description"
              value={createRoomData.description}
              onChange={handleCreateRoomFormChange}
              id="description"
              placeholder=" "
            />

            <LabelRegisterProduct> คำอธิบาย</LabelRegisterProduct>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ประเภทของห้อง
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300  focus:outline-none focus:ring-0 focus:border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                onChange={handleCreateRoomFormChange}
                name="categoryId"
                value={createRoomData.categoryId}
              >
                <option value="">กรุณาเลือกประเภทของห้อง</option>
                <option value="1">ประเภทจอง</option>
                <option value="2">ประเภทขาย</option>
              </select>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                จังหวัด
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300  focus:outline-none focus:ring-0 focus:border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                onChange={handleCreateRoomFormChange}
                name="provinceId"
                value={createRoomData.provinceId}
              >
                <option value="">กรุณาเลือกจังหวัด</option>
                {province.map((el, idx) => (
                  <option key={idx} value={el.id}>
                    {el.title}
                  </option>
                ))}
              </select>
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
