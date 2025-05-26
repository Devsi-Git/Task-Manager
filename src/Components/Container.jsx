import Navbar from "./Navbar";
import TaskSection from "./TaskSection";

function Container() {
  return (
    <main className="flex flex-col w-screen">
      <Navbar />
      <article className="bg-[#ececec9d] 320:mr-1.5 740:mr-0 320:px-3 740:px-5 py-5 rounded-tr-4xl h-fit min-h-screen">
        <header>
          <h2 className="mr-3 mb-5 320:text-sm 740:text-base">اماده ای همه تسک هارو بترکونی؟ 😍</h2>
        </header>
        <section className="gap-3 1020:gap-5 grid 320:grid-cols-1 740:grid-cols-2 990:grid-cols-3">
          <TaskSection>برای انجام</TaskSection>
          <TaskSection>درحال انجام</TaskSection>
          <TaskSection>انجام شده</TaskSection>
        </section>
      </article>
    </main>
  );
}

export default Container;
