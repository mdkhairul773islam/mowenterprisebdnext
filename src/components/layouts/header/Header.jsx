import Notification from "./Notification";
import HeaderProfile from "./HeaderProfile";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <div className="bg-white text-black shadow-md rounded px-5 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-primary rounded-sm text-xl cursor-pointer"
        >
          <FaBarsStaggered />
        </div>
        <div>
          <h4 className="text-dark-800 text-xl font-bold tracking-wider">
            Point of Sale
          </h4>
          <p className="text-dark-500 text-xs">Manage your purchase</p>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="h-12 w-12 flex items-center justify-center rounded-full hover:bg-primary/10 duration-500 hover:rotate-[360deg] cursor-pointer">
          <IoSettingsOutline className="text-2xl" />
        </div>

        <Notification />
        <HeaderProfile />
      </div>
    </div>
  );
};

export default Header;
