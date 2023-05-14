import FormRegisterProduct from "../features/registerProduct/FormRegisterProduct";

export default function RegisterProductPage() {
  return (
    <div>
      <div className="w-full bg-gray-200 flex">
        <FormRegisterProduct />
        <div className="bg-red-400 w-[50%]">
          <p>right</p>
        </div>
      </div>
    </div>
  );
}
