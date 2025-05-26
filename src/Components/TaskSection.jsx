import Cart from "./Cart";
//eslint-disable-next-line
import { motion } from "motion/react";

const containerVarians = {
  hidden: {},
  visiable: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVarians = {
  hidden: { y: 300, opacity: 0 },
  visiable: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
    },
  },
};

function TaskSection({ children }) {
  return (
    <motion.div
      variants={containerVarians}
      initial="hidden"
      animate="visiable"
      className="flex flex-col gap-3 bg-[#fffdf1] p-4 rounded-xl h-fit"
    >
      <span className="top-0 relative flex justify-between items-center w-full">
        <h4 className="320:text-sm 740:text-base"> {children} </h4>
        <span className="hover:bg-[#ececec9c] p-1.5 rounded-2xl transition-all cursor-pointer">
          <svg
            className="320:w-3 740:w-4"
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1V15"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 8H15"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </span>
      <div className="gap-3 grid 320:grid-cols-[200px_200px_200px] 740:grid-cols-1 overflow-x-scroll">
        <motion.span variants={itemVarians}>
          <Cart />
        </motion.span>

        <motion.span variants={itemVarians}>
          <Cart />
        </motion.span>

        <motion.span variants={itemVarians}>
          <Cart />
        </motion.span>
      </div>
    </motion.div>
  );
}

export default TaskSection;
