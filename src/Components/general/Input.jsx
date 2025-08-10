import { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

function Input({ type, placeholder, ...reg }) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative">
      <input
        className="bg-[#fffdf1] dark:bg-[#9290C3] px-3 py-2 rounded-xl focus:outline-0 focus:ring-[#FABB18] focus:ring-1 dark:focus:ring-[#9290C3] ring-offset-[#F3F3F3] focus:ring-offset-2 dark:ring-offset-[#535C91] w-70 max-420:w-55 max-500:w-65 dark:placeholder:text-[#585786] dark:text-[#1B1A55] placeholder:text-[#cecece] placeholder:text-xs max-740:text-sm transition-all"
        id={type}
        type={isPassword ? (show ? "text" : "password") : type}
        placeholder={placeholder}
        {...reg}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="left-3 absolute inset-y-0 flex items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-600"
        >
          {show ? <LuEyeClosed /> : <LuEye />}
        </button>
      )}
    </div>
  );
}

export default Input;
