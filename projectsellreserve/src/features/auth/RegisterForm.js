import { useState } from "react";
import Input from "../../components/Input";
import validateRegister from "../../validators/validate-register";

const initiaInput = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export default function RegisterForm() {
  const [input, setInput] = useState(initiaInput);
  const [error, setError] = useState({});

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const result = validateRegister(input);
    if (result) {
      setError(result);
    } else {
      setError({});
    }
  };

  return (
    <form
      className="space-y-6"
      action="#"
      autoComplete="off"
      onSubmit={handleSubmitForm}
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          ชื่อ
        </label>

        <Input
          placeholder="First name"
          name="firstName"
          value={input.firstName}
          onChange={handleChangeInput}
          error={error.firstName}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          นามสกุล
        </label>

        <Input
          placeholder="Last name"
          name="lastName"
          value={input.lastName}
          onChange={handleChangeInput}
          error={error.lastName}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          อีเมล
        </label>

        <Input
          placeholder="Email"
          name="email"
          value={input.email}
          onChange={handleChangeInput}
          error={error.email}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          รหัสผ่าน
        </label>

        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
          error={error.password}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          ยืนยันรหัสผ่าน
        </label>

        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          error={error.confirmPassword}
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        สมัครสมาชิก
      </button>
    </form>
  );
}
