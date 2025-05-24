import { useState } from "react";
//eslint-disable-next-line
import { motion } from "motion/react";
const menuVarians = {
  open: {},
  close: {},
};

const menuItemVarians1 = {
  open: { width: 16 },
  closed: { width: 2 },
};

const menuItemVarians2 = {
  open: { x: -4 },
  closed: { x: 0 },
};

const menuItemVarians3 = {
  open: { width: 8, x: -8 },
  closed: { width: 4, x: 0 },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="justify-between items-center grid grid-cols-[40%_40%] 320px:grid-cols-[5%_95%] 320px:mx-2 mr-11 py-4 text-center">
      <div className="320px:hidden flex items-center gap-2">
        <input
          className="bg-[#ececec9d] px-4 py-2 rounded-xl focus:outline-0 focus:ring-[#FABB18] focus:ring-1 focus:ring-offset-2 w-[60%] focus:w-[90%] transition-all"
          type="text"
          placeholder="جستجو فعالیت..."
        />
        <span className="relative bg-amber-300 p-2.5 rounded-xl overflow-hidden hover:scale-90 transition-all">
          <span className="top-0 right-0 hover:-right-25 absolute bg-linear-150 from-[#fff0]b from-33% via-[#ffffff7c] via-45% to-[#fff0] to-58% rounded-xl w-34 h-full transition-all"></span>
          <svg
            width="16"
            height="18"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M11.5795 14.2955C11.1402 13.8562 11.1402 13.1438 11.5795 12.7045C12.0188 12.2652 12.7312 12.2652 13.1705 12.7045L17.6705 17.2045C18.1098 17.6438 18.1098 18.3562 17.6705 18.7955C17.2312 19.2348 16.5188 19.2348 16.0795 18.7955L11.5795 14.2955Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 7.875C0 12.2242 3.52576 15.75 7.875 15.75C12.2242 15.75 15.75 12.2242 15.75 7.875C15.75 3.52576 12.2242 0 7.875 0C3.52576 0 0 3.52576 0 7.875ZM13.5 7.87501C13.5 10.9816 10.9816 13.5 7.87501 13.5C4.76841 13.5 2.25001 10.9816 2.25001 7.87501C2.25001 4.76841 4.76841 2.25001 7.87501 2.25001C10.9816 2.25001 13.5 4.76841 13.5 7.87501Z"
              fill="black"
            />
          </svg>
        </span>
      </div>

      <motion.div
        className="z-10 flex flex-col space-y-0.5 mr-4 w-fit"
        variants={menuVarians}
        animate={isOpen ? "open" : "close"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.span
          className="bg-black rounded-3xl w-2 h-0.5"
          variants={menuItemVarians1}
        ></motion.span>
        <motion.span
          className="bg-black rounded-3xl w-3 h-0.5"
          variants={menuItemVarians2}
        ></motion.span>
        <motion.span
          className="bg-black rounded-3xl w-4 h-0.5"
          variants={menuItemVarians3}
        ></motion.span>
      </motion.div>

      <div className="flex justify-end items-center gap-5 320px:gap-3">
        <motion.span
          className="ml-4 320px:ml-2"
          initial={{ rotate: 0, transformOrigin: "top" }}
          whileHover={{
            rotate: [-15, 15, -15, 0],
          }}
        >
          <svg
            className="320px:w-4"
            width="22"
            height="22"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4526 25.6682C11.0608 27.0357 12.4092 28 14.0008 28C15.5923 28 16.9408 27.0357 17.549 25.6682C16.4267 25.7231 15.2597 25.76 14.0008 25.76C12.7419 25.76 11.5749 25.7231 10.4526 25.6682Z"
              fill="black"
            />
            <path
              d="M26.3532 19.74C24.877 17.8785 22.3996 14.2195 22.3996 10.64C22.3996 7.09073 20.1193 3.89758 16.7996 2.72382C16.7593 1.21406 15.5183 0 14.0007 0C12.482 0 11.2422 1.21406 11.2018 2.72382C7.88101 3.89758 5.6007 7.09073 5.6007 10.64C5.6007 14.2207 3.1244 17.8785 1.64712 19.74C1.15433 20.3616 1.00197 21.1825 1.24058 21.9363C1.47354 22.6721 2.05367 23.2422 2.79288 23.4595C4.08761 23.8415 6.20997 24.2715 9.44682 24.491C10.8479 24.5851 12.3543 24.64 14.0008 24.64C15.646 24.64 17.1525 24.5851 18.5535 24.491C21.7915 24.2715 23.9128 23.8415 25.2086 23.4595C25.9478 23.2422 26.5268 22.6722 26.7598 21.9363C26.9983 21.1825 26.8449 20.3616 26.3532 19.74Z"
              fill="black"
            />
          </svg>
        </motion.span>

        <span className="text-left">
          <h3 className="320px:text-sm">Mohammad Ghadimi</h3>
          <p className="text-[#8F8F8F] text-[13px] 320px:text-xs">طراح ui</p>
        </span>
        <span className="bg-[#FABB18] ml-5 320px:ml-2 rounded-full w-[50px] 320px:w-[35px] h-[50px] 320px:h-[35px] overflow-hidden text-center">
          <img src="../assets/mg 1 (1).png"></img>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
