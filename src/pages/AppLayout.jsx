import { Outlet } from "react-router-dom";
import Sidebar from "../Components/menu/Sidebar";
import SidebarMobile from "../Components/menu/SidebarMobile";
import Footer from "../Components/footer/Footer";

function AppLayout() {
  return (
    <>
      <div className="flex flex-row-reverse font-vazir">
        <Outlet />
        <SidebarMobile />
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
