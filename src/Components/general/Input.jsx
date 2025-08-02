function Input({ type, placeholder, ...reg }) {
  return (
    <input
      className="bg-[#fffdf1] dark:bg-[#9290C3] px-3 py-2 rounded-xl focus:outline-0 focus:ring-[#FABB18] focus:ring-1 dark:focus:ring-[#9290C3] ring-offset-[#F3F3F3] focus:ring-offset-2 dark:ring-offset-[#535C91] w-70 max-500:w-55 dark:placeholder:text-[#585786] dark:text-[#1B1A55] placeholder:text-[#cecece] placeholder:text-xs max-740:text-sm transition-all ]"
      id={type}
      type={type}
      placeholder={placeholder}
      {...reg}
    />
  );
}

export default Input;
