import { motion } from "motion/react";

function SideBtn({ children, icon, active }) {
  const styles =
    "flex relative hover:shadow-[7px_6px_10px_#0000002f] transition-all overflow-hidden rounded-xl px-6 items-center py-3 flex-row-reverse gap-5";
  return (
    <button
      className={`${
        active
          ? "bg-[#F3F3F3]  text-black " + styles
          : " bg-black  text-amber-50 flex relative hover:shadow-[7px_6px_10px_#0000002f] transition-all overflow-hidden rounded-xl px-6 items-center py-3 flex-row-reverse gap-5"
      }`}
    >
      {children}
      <i>{icon}</i>
      <motion.span
        className="absolute w-111 h-full bg-linear-150 from-[#fff0]b from-33% rounded-xl top-0 right-0 via-[#ffffff7c] via-45% to-[#fff0] to-58%"
        whileHover={{ right: -300 }}
        transition={10}
      ></motion.span>
    </button>
  );
}
export default SideBtn;
