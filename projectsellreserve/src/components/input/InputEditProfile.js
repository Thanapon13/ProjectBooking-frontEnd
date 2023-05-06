import "flowbite";

export default function InputEditProfile({
  type,
  placeholder,
  name,
  onChange,
  autoComplete
}) {
  return (
    <>
      <input
        type={type || "text"}
        className=" block w-full bg-gray-100 text-gray-900 text-xs border-none"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        autoComplete={autoComplete}
      />
    </>
  );
}
