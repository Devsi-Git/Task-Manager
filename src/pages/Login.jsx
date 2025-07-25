//eslint-disable-next-line
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signUpLogin } from "../services/apiUser";
import Input from "../Components/general/Input";
import Btn from "../Components/general/Btn";
import BurgerMenu from "../Components/menu/BurgerMenu";
import toast from "react-hot-toast";
import Loader from "../Components/general/Loader";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { mutate, isPending: isSigningUp } = useMutation({
    mutationFn: ({ email, password, username }) =>
      signUpLogin({ email, password, username }),

    onSuccess: () => {
      navigate("/home");
      toast.success("با موفقیت وارد شدید.", {
        style: {
          fontFamily: "Vazirmatn",
          border: "1px solid #FABB18",
          padding: "11px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#FABB18",
          secondary: "#fff",
        },
      });
    },
    onError: () =>
      toast.error("رمز عبور یا ایمیل نادرست است.", {
        style: {
          fontFamily: "Vazirmatn",
          border: "1px solid #713200",
          padding: "11px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      }),
  });

  function onError(err) {
    const usernameErr = err.username?.message;
    const passwordErr = err.password?.message;
    toast.error(usernameErr || passwordErr || "لطفا همه فیلد هارا پر کنید.", {
      style: {
        fontFamily: "Vazirmatn",
        border: "1px solid #713200",
        padding: "11px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  }

  return (
    <main className="flex flex-col justify-center items-center gap-5 w-full h-screen">
      <span className="top-5 right-3 z-40 fixed">
        <BurgerMenu />
      </span>
      <motion.h1
        className="max-500:text-sm"
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.25 }}
        animate={{ y: 0, opacity: 1 }}
      >
        در سایت ثبت نام کن🗝️
      </motion.h1>

      <motion.article
        className="flex flex-col items-center bg-[#ececec9d] px-5 max-500:px-4 py-6 max-500:py-5 rounded-2xl ring-[#FABB18] ring-1 ring-offset-5 ring-offset-white"
        initial={{ x: -350, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <form
          onSubmit={handleSubmit(mutate, onError)}
          className="flex flex-col items-center"
        >
          <section className="flex items-center gap-5 max-500:gap-3 mb-6">
            <div className="flex flex-col items-end gap-11 w-fit">
              <label className="max-500:text-sm" htmlFor="#username">
                نام کاربری
              </label>
              <label className="max-500:text-sm" htmlFor="#email">
                ایمیل
              </label>
              <label className="max-500:text-sm" htmlFor="#password">
                رمز ورود
              </label>
            </div>

            <div className="flex flex-col gap-7 max-500:gap-6">
              <Input
                placeholder="میتونه هرچی باشه..."
                type="username"
                {...register("username", {
                  required: "لطفا همه فیلد هارا پر کنید.",
                  validate: (value) => {
                    return (
                      value.length <= 16 ||
                      "نام کاربری باید حداکثر 16 کرکتر باشد."
                    );
                  },
                })}
              />
              <Input
                placeholder="باید تاییدش کنی..."
                type="email"
                {...register("email", {
                  required: "لطفا همه فیلد هارا پر کنید",
                })}
              />
              <Input
                placeholder="به کسی نگو..."
                type="password"
                {...register("password", {
                  required: "لطفا همه فیلد هارا پر کنید",
                  validate: (value) => {
                    return value.length >= 6 || "رمز باید حداقل 6 کرکتر باشد.";
                  },
                })}
              />
            </div>
          </section>

          {isSigningUp ? <Loader /> : <Btn>تایید مشخصات</Btn>}
        </form>
        <span className="flex bg-[#d2d2d2] mt-5 mb-2 rounded-2xl w-75 max-500:w-62 h-px"></span>

        <section className="flex flex-col justify-start w-75 max-500:w-62">
          <a
            href="#"
            className="m-0.5 w-fit text-blue-400 hover:text-blue-500 max-500:text-xs text-sm"
          >
            فراموشی رمز عبور؟
          </a>
          <a
            href="#"
            className="m-0.5 w-fit text-blue-400 hover:text-blue-500 max-500:text-xs text-sm"
          >
            ارتباط با پشتیبانی
          </a>
        </section>
      </motion.article>
    </main>
  );
}

export default Login;
