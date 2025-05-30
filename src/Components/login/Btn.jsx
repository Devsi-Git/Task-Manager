//eslint-disable-next-line
import { motion } from "motion/react";
function Btn() {
  return (
    <button className="relative flex flex-row-reverse justify-center items-center gap-3 bg-amber-400 hover:shadow-[7px_6px_10px_#0000002f] mt-8 1020:px-6 990:px-5 1020:py-3 320:py-2.5 rounded-xl 320:w-26 500:w-30 990:w-[131px] overflow-hidden text-black 320:text-xs 500:text-sm text-nowrap transition-all cursor-pointe">
      تایید مشخصات
      <motion.span
        className="top-0 right-0 absolute bg-linear-150 from-[#fff0]b from-33% via-[#ffffff7c] via-45% to-[#fff0] to-58% rounded-xl w-111 h-full"
        whileHover={{ right: -300 }}
        transition={10}
      ></motion.span>
    </button>
  );
}

export default Btn;
