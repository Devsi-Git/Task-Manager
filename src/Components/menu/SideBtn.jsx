// eslint-disable-next-line
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

function SideBtn({ children, icon, to }) {
  function isActiveHandle(isActive) {
    let styles;
    if (isActive) {
      styles =
        " 320:w-35 740:w-[120px] 990:w-[131px] max-600:dark:bg-[#5f6795] text-sm 990:text-base dark:bg-[#535C91] dark:text-[#c7c3df] flex justify-center relative  bg-[#F3F3F3] max-740:bg-[#F3E9C4] text-black transition-all overflow-hidden rounded-xl  990:px-5 items-center py-2.5 1020:px-6 1020:py-3 flex-row-reverse gap-3 ";
    } else {
      styles =
        "cursor-pointer  320:w-35 740:w-[120px] 990:w-[131px] dark:bg-[#9290C3] dark:text-[#070F2B] text-sm 990:text-base flex justify-center relative hover:shadow-[7px_6px_10px_#0000002f] bg-black text-amber-50 transition-all overflow-hidden rounded-xl 990:px-5 items-center py-2.5 1020:px-6 1020:py-3 flex-row-reverse gap-3 ";
    }

    return styles;
  }

  return (
    <NavLink to={to} className={({ isActive }) => isActiveHandle(isActive)}>
      {children}
      {icon}
      <motion.span
        className="top-0 right-0 absolute bg-linear-150 from-[#fff0]b from-33% via-[#ffffff7c] via-45% to-[#fff0] to-58% rounded-xl w-111 h-full"
        whileHover={{ right: -300 }}
        transition={10}
      ></motion.span>
    </NavLink>
  );
}
export default SideBtn;
