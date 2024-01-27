"use client";
// Import Dependencies
import Link from "next/link";
import { useState } from "react";
import sidebarData from "./sidebarData";
import { GrClose } from "react-icons/gr";
import { IoLogoModelS } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [subnav, setSubnav] = useState({
    open: false,
    index: null,
  });

  const showSubnav = (index) =>
    setSubnav({
      open: !subnav.open,
      index: index,
    });

  return (
    <div
      className={`sideBar ${
        sidebarOpen
          ? "visible opacity-100 left-0"
          : "-left-full invisible opacity-0"
      } w-72 bg-white h-screen fixed p-5 shadow-md duration-500 overflow-y-auto z-[99999]`}
    >
      <div className="flex items-center justify-between pb-3 border-b border-b-[#f6f6f6]">
        <div className="flex gap-x-4 items-center  ">
          <div
            className={`bg-primary p-2 rounded-sm text-white ${
              sidebarOpen && "rotate-[360deg]"
            }`}
          >
            <IoLogoModelS />
          </div>
          <span className={`text-black font-bold text-xl duration-200`}>
            BlueCar
          </span>
        </div>

        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-primary lg:hidden rounded-sm text-xl cursor-pointer"
        >
          <GrClose />
        </div>
      </div>

      <ul className="mt-4 space-y-1">
        {sidebarData.map((menu, index) => (
          <li key={index}>
            <Link
              onClick={() => showSubnav(index)}
              href={`${menu.submenu ? "#" : menu.slug} `}
              className={`flex relative rounded-md p-2 cursor-pointer font-medium text-dark-700 hover:bg-primary hover:text-white items-center gap-x-2
               ${
                 subnav.open &&
                 subnav.index === index &&
                 "bg-primary !text-white"
               } `}
            >
              {menu.icon}
              <span className={` origin-left duration-200`}>{menu.title}</span>
              {menu.submenu && (
                <RiArrowDownSLine
                  className={`absolute right-3 ${
                    subnav.open && subnav.index === index && "rotate-180"
                  }`}
                />
              )}
            </Link>

            <ul className={`duration-500 ml-2 text-dark-700`}>
              {subnav.open &&
                subnav.index === index &&
                menu.submenu?.map((smenu, index) => (
                  <li key={index}>
                    <Link
                      href={smenu.slug}
                      className="p-2 hover:text-primary flex  items-center gap-2"
                    >
                      <IoMdArrowDropright />
                      {smenu.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
