import Navbar from "./Navbar";
import TaskSection from "./TaskSection";

function Container() {
  return (
    <main className="flex flex-col w-screen">
      <Navbar />
      <article className="bg-[#ececec9d] p-5 rounded-tr-4xl h-fit min-h-screen">
        <header>
          <h2 className="mr-3 mb-5 320px:text-sm">اماده ای همه تسک هارو بترکونی؟ 😍</h2>
        </header>
        <section className="gap-5 grid grid-cols-3 320px:grid-cols-1">
          <TaskSection>برای انجام</TaskSection>
          <TaskSection>درحال انجام</TaskSection>
          <TaskSection>انجام شده</TaskSection>
        </section>
      </article>
    </main>
  );
}

export default Container;
