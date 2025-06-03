import { useUi } from "../services/Uicontext";
import Header from "../Components/home/Header";
import TaskSection from "../Components/home/TaskSection";
import Modal from "../Components/Modal";

function Home() {
  const { modal } = useUi();

  return (
    <main className="flex flex-col w-screen">
      <Modal styles=" fixed w-50 h-50 absolute " />
      {modal && (
        <span className="z-16 fixed inset-0 bg-[#9797973d] backdrop-blur-[2px]"></span>
      )}
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
