import CardProduct from "../features/homePage/CardProduct";
import ProvinceLogo from "../features/homePage/ProvinceLogo";

export default function HomePage() {
  return (
    <div className=" w-[80%] m-auto flex flex-col gap-10">
      <ProvinceLogo />
      <CardProduct />
    </div>
  );
}
