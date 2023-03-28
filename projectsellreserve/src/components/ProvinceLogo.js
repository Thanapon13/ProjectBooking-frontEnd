export default function ProvinceLogo() {
  const provinceLogo = [
    {
      title: "Bangkok",
      url: "https://www.ab-in-den-urlaub.de/magazin/wp-content/uploads/2021/12/1638870853_Blick-auf-Bangkok.jpg"
    },
    {
      title: "Chanthaburi",
      url: "https://iamkohchang.com/wp-content/uploads/2020/03/Chanthaburi-guide.png"
    },
    {
      title: "Kanchanaburi",
      url: "https://www.yourtourdesk.com/wp-content/uploads/2022/05/kanchanaburi-from-bangkok-city-tours-tourist-attractions.jpg"
    },
    {
      title: "ChiangMai",
      url: "https://a.cdn-hotels.com/gdcs/production194/d455/ff7495ba-b88d-4956-9445-274f0a4c5ffc.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
    }
  ];

  return (
    <div className=" p-2 flex flex-col justify-center gap-10 ">
      <div className="flex justify-center items-center ">
        <h1 className="font-bold text-[20px]">ที่เที่ยวยอดนิยมในประเทศไทย</h1>
      </div>
      <div className=" flex justify-around items-center ">
        {provinceLogo.map((el, idx) => (
          <div key={idx} className="text-center cursor-pointer">
            <img
              alt="img"
              className="w-[100px] h-[100px] p-2 rounded-full "
              src={el.url}
            ></img>
            <p>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
