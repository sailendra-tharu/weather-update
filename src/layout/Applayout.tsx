import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div className="w-full h-screen flex border-2 border-black">
      {/* Navbar */}
      <div className="w-[200px] h-full bg-gray-800">
        <Sidebar/>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
