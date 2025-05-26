// eslint-disable-next-line
import { motion } from "motion/react";

function SideBtn({ children, icon, active }) {
  const styles = `cursor-pointer 320:w-40 740:w-fit 740:px-4 740:py-2 740:text-sm flex justify-center relative hover:shadow-[7px_6px_10px_#0000002f] ${
    active ? "  bg-[#F3F3F3] text-black " : "bg-black text-amber-50"
  } transition-all overflow-hidden rounded-xl px-6 items-center py-3 flex-row-reverse gap-5`;
  return (
    <button className={styles}>
      {children}
      <i>{icon}</i>
      <motion.span
        className="top-0 right-0 absolute bg-linear-150 from-[#fff0]b from-33% via-[#ffffff7c] via-45% to-[#fff0] to-58% rounded-xl w-111 h-full"
        whileHover={{ right: -300 }}
        transition={10}
      ></motion.span>
    </button>
  );
}
export default SideBtn;
