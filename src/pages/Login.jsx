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

      <motion.article
        className="flex flex-col items-center bg-[#ececec9d] dark:bg-[#535C91] px-5 max-500:px-4 py-6 max-500:py-5 rounded-2xl ring-[#FABB18] ring-1 dark:ring-[#9290C3] ring-offset-5 ring-offset-white dark:ring-offset-[#070F2B] max-420:ring-offset-3"
        initial={{ x: -270, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <LoginForm />

        <span className="flex bg-[#d2d2d2] dark:bg-[#070f2b68] mt-5 mb-2 rounded-2xl w-75 max-500:w-62 h-px"></span>

        <section className="flex flex-col justify-start w-75 max-500:w-62">
          <a
            href="#"
            className="m-0.5 w-fit text-blue-400 hover:text-blue-500 dark:hover:text-[#9290C3] dark:text-[#070F2B] max-500:text-xs text-sm"
          >
            فراموشی رمز عبور؟
          </a>
          <a
            href="#"
            className="m-0.5 w-fit text-blue-400 hover:text-blue-500 dark:hover:text-[#9290C3] dark:text-[#070F2B] max-500:text-xs text-sm"
          >
            ارتباط با پشتیبانی
          </a>
        </section>
      </motion.article>
    </main>
  );
}

export default Login;
