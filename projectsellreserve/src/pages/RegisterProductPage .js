import FormRegisterProduct from "../features/registerProduct/FormRegisterProduct";
export default function RegisterProductPage() {
  return (
    <div>
      <div className="w-[80%] mt-2 flex m-auto gap-6">
        <div className="w-[40%] flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl">ลงทะเบียนสินค้ากับเรา</h1>
          <img
            className="z-0"
            alt="img"
            src="https://res.cloudinary.com/deu3ate5p/image/upload/v1684156834/346119171_263414769503847_2774277376785316333_n_fygr5m.png"
          />
        </div>
        <FormRegisterProduct />
      </div>
    </div>
  );
}
