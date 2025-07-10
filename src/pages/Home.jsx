import { useUi } from "../services/Uicontext";
//eslint-disable-next-line
import { AnimatePresence, motion } from "motion/react";
import Header from "../Components/home/Header";
import TaskSection from "../Components/home/TaskSection";
import Modal from "../Components/general/Modal";
import Input from "../Components/general/Input";
import { useForm } from "react-hook-form";
import Btn from "../Components/general/Btn";

function Home() {
  const { modal } = useUi();
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <main className="flex flex-col w-screen">
      <AnimatePresence>
        {modal && (
          <motion.span
            className="z-16 fixed inset-0 flex justify-center items-center bg-[#9797974e] backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Modal styles=" p-4 z-80 rounded-2xl bg-amber-200">
              <form
                className="flex flex-col gap-2 w-fitt"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  placeholder={"موضوع فعالیت"}
                  type={"text"}
                  {...register("text")}
                />
                <textarea
                  {...register("textarea")}
                  placeholder="توضیحات این  فعالیت"
                  className="bg-[#fffdf1] px-3 py-2 rounded-xl focus:outline-0 focus:ring-[#FABB18] focus:ring-1 focus:ring-offset-[#F3F3F3] focus:ring-offset-2 w-70 max-500:w-55 placeholder:text-[#cecece] placeholder:text-xs transition-all"
                ></textarea>
                <Btn>اضافه کردن</Btn>
              </form>
            </Modal>
          </motion.span>
        )}
      </AnimatePresence>

      <Header />

      <article className="bg-[#ececec9d] 320:mr-1.5 740:mr-0 320:px-3 740:px-5 py-5 rounded-tr-4xl rounded-br-lg h-fit min-h-screen">
        <h1 className="mr-3 mb-5 320:text-sm 740:text-base">
          اماده ای همه تسک هارو بترکونی؟ 😍
        </h1>
        <section className="gap-3 1020:gap-5 grid 320:grid-cols-1 740:grid-cols-2 990:grid-cols-3">
          <TaskSection>برای انجام</TaskSection>
          <TaskSection>درحال انجام</TaskSection>
          <TaskSection>انجام شده</TaskSection>
        </section>
      </article>
    </main>
  );
}

export default Home;
