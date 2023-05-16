import "flowbite";

export default function DropdownCreditCard() {
  return (
    <div>
      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[40%] dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              บัตรเคดิตหรือบัตรเดบิต2
            </button>
          </li>
          <li>
            <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              บัตรเคดิตหรือบัตรเดบิต3
            </button>
          </li>
          <li>
            <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              บัตรเคดิตหรือบัตรเดบิต4
            </button>
          </li>
          <li>
            <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              บัตรเคดิตหรือบัตรเดบิต5
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
