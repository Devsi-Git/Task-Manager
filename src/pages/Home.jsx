//eslint-disable-next-line
import { AnimatePresence, motion } from "motion/react";
import { useUi } from "../services/Uicontext";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCart } from "../services/apiCarts";
import { CgClose } from "react-icons/cg";
import Header from "../Components/home/Header";
import TaskSection from "../Components/home/TaskSection";
import Modal from "../Components/general/Modal";
import Input from "../Components/general/Input";
import Loader from "../Components/general/Loader";
import Btn from "../Components/general/Btn";

function Home() {
  const { modalTask, setModalTask } = useUi();
  const queryClinet = useQueryClient();
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: addCart,
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["carts"] });
      setModalTask(false);
      reset();
    },
  });

  return (
    <main className="flex flex-col w-screen">
      <AnimatePresence>
        {modalTask && (
          <motion.div
            className="z-16 fixed inset-0 flex justify-center items-center bg-[#9797974e] backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Modal styles=" p-4 z-80 rounded-2xl bg-amber-200">
              <form
                className="flex flex-col gap-2 w-fitt"
                onSubmit={handleSubmit(mutate)}
              >
                <Input
                  placeholder={"موضوع فعالیت"}
                  type="text"
                  {...register("subject")}
                />
                <textarea
                  {...register("description")}
                  placeholder="توضیحات این  فعالیت"
                  className="bg-[#fffdf1] px-3 py-2 rounded-xl focus:outline-0 focus:ring-[#FABB18] focus:ring-1 focus:ring-offset-[#F3F3F3] focus:ring-offset-2 w-70 max-500:w-55 placeholder:text-[#cecece] placeholder:text-xs transition-all"
                ></textarea>
                <label className="flex space-x-3 mt-2 text-sm">
                  <input
                    type="radio"
                    value="برای انجام"
                    {...register("status")}
                  />
                  <p>برای انجام</p>
                </label>
                <label className="flex space-x-3 text-sm">
                  <input
                    type="radio"
                    value="درحال انجام"
                    {...register("status")}
                  />
                  <p>درحال انجام</p>
                </label>
                <label className="flex space-x-3 text-sm">
                  <input
                    type="radio"
                    value="انجام شده"
                    {...register("status")}
                  />
                  <p>انجام شده</p>
                </label>
                {isCreating ? <Loader /> : <Btn>اضافه کردن</Btn>}
              </form>
            </Modal>
          </motion.div>
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
