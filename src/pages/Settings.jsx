//eslint-disable-next-line
import { motion, scale } from "motion/react";
import Toggle from "../Components/settings/toggle";
import BurgerMenu from "../Components/menu/BurgerMenu";

export default function Settings() {
  return (
    <mian className="flex justify-center items-center w-full h-[calc(100vh-196px)]">
      <span className="top-5 right-3 z-40 fixed">
        <BurgerMenu />
      </span>
      <motion.div
        className="shadow dark:shadow-[#7574a2] px-6 py-4 rounded-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <Toggle />
      </motion.div>
    </mian>
  );
}
