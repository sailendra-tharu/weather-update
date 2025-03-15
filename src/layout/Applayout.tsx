import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col sm:flex-row border-2 border-black">
      {/* Sidebar */}
      <div className="w-full sm:w-[200px] h-auto sm:h-full bg-gray-800">
        <Sidebar />
      </div>

      {/* Content Area */}
      <div className="flex-1 h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
