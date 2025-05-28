import { Outlet } from "react-router-dom";
import Sidebar from "../Components/menu/Sidebar";

function AppLayout() {
  return (
    <div className="flex flex-row-reverse mx-auto max-w-[1345px] font-vazir">
      <Outlet />
      <Sidebar />
    </div>
  );
}

export default AppLayout;
