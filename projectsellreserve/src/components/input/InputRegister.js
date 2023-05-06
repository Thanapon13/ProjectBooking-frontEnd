import "flowbite";

export default function InputRegister({
  type,
  placeholder,
  name,
  value,
  onChange,
  error
}) {
  return (
    <>
      <input
        type={type || "text"}
        id="email"
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${
          error ? "border-red-600" : ""
        }`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="text-red-600 text-[12px]">{error}</div>}
    </>
  );
}
