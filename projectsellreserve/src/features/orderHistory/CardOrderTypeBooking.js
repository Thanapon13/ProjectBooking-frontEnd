export default function CardOrderTypeBooking() {
  return (
    <>
      <div className="border-2 mt-4 p-4 flex justify-center items-center gap-6 mb-6">
        {/* Box Image */}
        <div>
          <img
            src="https://www.ahstatic.com/photos/5451_ho_00_p_1024x768.jpg"
            alt="img"
            className="w-[240px]"
          />
        </div>
        {/* Box Content */}
        <div className="w-3/6 flex justify-start items-center gap-6 p-2">
          {/* Laft */}
          <div className="font-bold">
            <h1>Custoomer :</h1>
            <h1>Order id :</h1>
            <h1>Check in :</h1>
            <h1>Check out :</h1>
            <h1>Number of guests :</h1>
            <h1>Price :</h1>
            <h1>Status :</h1>
          </div>
          {/* Right */}
          <div>
            <h1>Haruka</h1>
            <h1>123</h1>
            <h1>10 เม.ย</h1>
            <h1>15 เม.ย</h1>
            <h1>5 คน</h1>
            <h1>56,000</h1>
            <h1>Reserve</h1>
          </div>
        </div>
      </div>
    </>
  );
}
