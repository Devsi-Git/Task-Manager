//eslint-disable-next-line
import { motion } from "motion/react";
import Input from "../Components/login/Input";
import Btn from "../Components/login/Btn";
function Login() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 w-full h-screen">
      <motion.h1 className="max-500:text-sm" 
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.25 }}
        animate={{ y: 0, opacity: 1 }}
      >
        در سایت ثبت نام/ ورود کن🗝️
      </motion.h1>

      <motion.article
        className="flex flex-col items-center bg-[#ececec9d] px-5 max-500:px-4 py-6 max-500:py-5 rounded-2xl"
        initial={{ x: -350, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <section className="flex items-center gap-5 max-500:gap-3">
          <div className="flex flex-col items-end gap-11 w-fit">
            <label className="max-500:text-sm" htmlFor="username">نام کاربری</label>
            <label className="max-500:text-sm" htmlFor="#email">ایمیل</label>
            <label className="max-500:text-sm" htmlFor="#password">رمز ورود</label>
          </div>

          <div className="flex flex-col gap-7 max-500:gap-6">
            <Input placeholder="میتونه هرچی باشه..." type="text" />
            <Input placeholder="باید تاییدش کنی..." type="email" />
            <Input placeholder="به کسی نگو..." type="password" />
          </div>
        </section>

        <Btn />

        <span className="flex bg-[#d2d2d2] mt-5 mb-2 rounded-2xl w-75 max-500:w-62 h-[1px]"></span>

        <section className="flex flex-col justify-start w-75 max-500:w-62">
          <a 
            href="#"
            className="m-0.5 text-blue-400 hover:text-blue-500 max-500:text-xs text-sm"
          >
            فراموشی رمز عبور؟
          </a>
          <a 
            href="#"
            className="m-0.5 text-blue-400 hover:text-blue-500 max-500:text-xs text-sm"
          >
            ارتباط با پشتیبانی
          </a>
        </section>
      </motion.article>
    </main>
  );
}

export default Login;
