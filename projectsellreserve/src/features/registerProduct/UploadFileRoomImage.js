import { Button, Spin, Upload } from "antd";

export default function UploadFileRoomImage() {
  return (
    <div>
      <Upload.Dragger
        multiple={true}
        listType="picture"
        action={"http://localhost:3000"}
        showUploadList={{ showRemoveIcon: true }}
        accept=".png,.jpeg,.doc"
        beforeUpload={file => {
          console.log({ file }, "file");
          return true;
        }}
        // defaultFileList={[
        //   {
        //     uid: "adc",
        //     name: "exising_file.png",
        //     status: "uploading",
        //     percent: 50
        //     // url: "https://www.google.com"
        //   }
        // ]}
        iconRender={() => {
          return <Spin></Spin>;
        }}
        // itemRender={(exisingComp, file) => {
        //   return <p>{file.name}</p>;
        // }}
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
  );
}
