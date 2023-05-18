export default function CardButton({ children }) {
  return (
    <div>
      <div className="border-2 p-4 rounded-xl bg-white shadow-lg shadow-indigo-500/40">
        <div>{children}</div>
      </div>
    </div>
  );
}
