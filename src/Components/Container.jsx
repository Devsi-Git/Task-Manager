import Navbar from "./Navbar";
import TaskSection from "./TaskSection";

function Container() {
  return (
    <main className="w-screen flex flex-col">
      <Navbar />
      <article className="bg-[#ececec9d] p-10  rounded-tr-4xl  h-screen">
        <header><h2>اماده ای همه تسک هارو بترکونی؟ 😍</h2></header>
        <section className="grid gap-5 mt-7 grid-cols-3">
          <TaskSection>برای انجام</TaskSection>
          <TaskSection>درحال انجام</TaskSection>
          <TaskSection>انجام شده</TaskSection>
        </section>
      </article>
    </main>
  );
}

export default Container;
