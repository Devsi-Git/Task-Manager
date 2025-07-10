function Input({ type, placeholder, ...reg }) {
  return (
    <input
      className="bg-[#fffdf1] px-3 py-2 rounded-xl focus:outline-0 focus:ring-[#FABB18] focus:ring-1 focus:ring-offset-[#F3F3F3] focus:ring-offset-2 w-70 max-500:w-55 placeholder:text-[#cecece] placeholder:text-xs transition-all"
      id={type}
      type={type}
      placeholder={placeholder}
      {...reg}
    />
  );
}

export default Input;
