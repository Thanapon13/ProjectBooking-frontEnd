export default function Buttons({ children, onClick, style }) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        style={style}
        className="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm p-4 text-center mr-2 mb-2 mt-5"
      >
        <div>{children}</div>
      </button>
    </>
  );
}
