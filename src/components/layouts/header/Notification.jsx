// Import Dependencies
"use client";
import { Dropdown } from "flowbite-react";
import { IoDiscOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

const Notification = () => {
  return (
    <>
      <Dropdown
        label=""
        renderTrigger={() => (
          <div className="h-12 w-12 rounded-full flex items-center justify-center hover:bg-primary/10 cursor-pointer">
            <div className="relative">
              <IoMdNotificationsOutline className="text-2xl" />
              <span className="absolute right-0 top-0 flex h-[10px] w-[10px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[10px] w-[10px] bg-primary/90"></span>
              </span>
            </div>
          </div>
        )}
      >
        <div className="w-[200px]">
          <Dropdown.Item icon={IoDiscOutline}>List One</Dropdown.Item>
          <Dropdown.Item icon={IoDiscOutline}>List Two</Dropdown.Item>
          <Dropdown.Item icon={IoDiscOutline}>List Three</Dropdown.Item>
        </div>
      </Dropdown>
    </>
  );
};

export default Notification;
