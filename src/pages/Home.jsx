//eslint-disable-next-line
import { AnimatePresence, motion } from "motion/react";
import { useUi } from "../services/Uicontext";
import Header from "../Components/home/Header";
import TaskSection from "../Components/home/TaskSection";
import Modal from "../Components/general/Modal";

import AddTaskForm from "../Components/home/AddTaskForm";

function Home() {
  const { modalTask } = useUi();

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
              <AddTaskForm />
            </Modal>
          </motion.div>
        )}
      </AnimatePresence>

      <Header />

      <article className="bg-[#ececec9d] 320:mr-1.5 740:mr-0 320:px-3 740:px-5 py-5 rounded-tr-4xl rounded-br-lg h-fit min-h-screen">
        <h1 className="mr-3 mb-5 320:text-sm 740:text-base">
          آماده ای همه تسک هارو بترکونی؟ 😍
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
