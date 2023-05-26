import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

export default function LoginForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userLogin } = useAuth();

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      await userLogin(email, password);
      onClose();
      toast.success("login success");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <form className="space-y-6" action="#" onSubmit={handleSubmitForm}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          อีเมลของคุณ
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@company.com"
          autoComplete="oof"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          รหัสผ่านของคุณ
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        ลงชื่อเข้าใช้บัญชีของคุณ
      </button>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        ยังไม่ได้ลงทะเบียน?{" "}
        <a
          href="/#"
          className="text-blue-700 hover:underline dark:text-blue-500"
        >
          สร้างบัญชี
        </a>
      </div>
    </form>
  );
}
