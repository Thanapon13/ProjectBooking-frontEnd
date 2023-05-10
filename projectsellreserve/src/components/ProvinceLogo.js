import { useEffect, useState } from "react";
import * as provinceApi from "../apis/province-api";

export default function ProvinceLogo() {
  const [province, setProvince] = useState([]);

  useEffect(() => {
    const fetchProvinceLogo = async () => {
      const res = await provinceApi.getProvince();
      setProvince(res.data.provinces);
      console.log(res.data, "res.data.province");
    };
    fetchProvinceLogo();
  }, []);

  return (
    <div className=" p-2 flex flex-col justify-center gap-10 ">
      <div className="flex justify-center items-center ">
        <h1 className="font-bold text-[20px]">ที่เที่ยวยอดนิยมในประเทศไทย</h1>
      </div>
      <div className=" flex justify-around items-center ">
        {province.map((el, idx) => (
          <div key={idx} className="text-center cursor-pointer">
            <img
              alt="img"
              className="w-[100px] h-[100px] p-2 rounded-full "
              src={el.ProvinceLogoImage}
            ></img>
            <p>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
