//eslint-disable-next-line
import { motion } from "motion/react";
import { useUi } from "../../services/Uicontext";

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

function BurgerMenu() {
  const { menu, setMenu } = useUi();

  return (
    <motion.div
      className="740:hidden z-50 flex flex-col space-y-0.5 bg-amber-300 mr-4 p-[7px] rounded-xl w-fit"
      variants={menuVarians}
      animate={menu ? "open" : "close"}
      onClick={() => setMenu(!menu)}
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
  );
}

export default BurgerMenu;
