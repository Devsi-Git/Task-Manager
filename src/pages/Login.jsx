//eslint-disable-next-line
import { motion } from "motion/react";
import BurgerMenu from "../Components/menu/BurgerMenu";
import LoginForm from "../Components/login/LoginForm";

function Login() {
  return (
    <main className="flex flex-col justify-center items-center gap-5 w-full h-screen">
      <span className="top-5 right-3 z-40 fixed">
        <BurgerMenu />
      </span>
      <motion.h1
        className="dark:text-[#c7c3df] max-500:text-sm"
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.25 }}
        animate={{ y: 0, opacity: 1 }}
      >
        در سایت ثبت نام یا ورود کن🗝️
      </motion.h1>

      <LoginForm />
    </main>
  );
}

export default Login;
