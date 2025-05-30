import { Outlet } from "react-router-dom";
import Sidebar from "../Components/menu/Sidebar";
import Footer from "../Components/footer/Footer";

function AppLayout() {
  return (
    <>
      <div className="flex flex-row-reverse mx-auto max-w-[1345px] font-vazir">
        <Outlet />
        <Sidebar />
      </div>
      <Footer/>
    </>
  );
}

export default AppLayout;
