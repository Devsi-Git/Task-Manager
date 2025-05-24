// eslint-disable-next-line
import { motion } from "motion/react";

function SideBtn({ children, icon, active }) {
  const styles = `cursor-pointer 320px:w-40 flex justify-center relative hover:shadow-[7px_6px_10px_#0000002f] ${
    active ? "  bg-[#F3F3F3] text-black " : "bg-black text-amber-50"
  } transition-all overflow-hidden rounded-xl px-6 items-center py-3 flex-row-reverse gap-5`;
  return (
    <button className={ styles}>
      {children}
      <i>{icon}</i>
      <motion.span
        className="absolute w-111 h-full  bg-linear-150 from-[#fff0]b from-33% rounded-xl top-0 right-0 via-[#ffffff7c] via-45% to-[#fff0] to-58%"
        whileHover={{ right: -300 }}
        transition={10}
      ></motion.span>
    </button>
  );
}
export default SideBtn;
