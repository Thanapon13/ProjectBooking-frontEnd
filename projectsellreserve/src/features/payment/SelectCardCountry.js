export default function SelectCardCountry({ setSelectedCountry, onClose }) {
  const countries = ["คองโก", "กรีซ", "กรีนแลนด์", "ฮ่องกง", "ไทย"];

  const handleCountryClick = country => {
    setSelectedCountry(country);
    onClose(); // เพิ่มบรรทัดนี้เพื่อปิด Modal เมื่อเลือกประเทศแล้ว
  };

  return (
    <div>
      {countries.map((country, index) => (
        <div
          key={index}
          className="border-b-2 py-4 cursor-pointer"
          onClick={() => handleCountryClick(country)}
        >
          <h1>{country}</h1>
        </div>
      ))}
    </div>
  );
}
