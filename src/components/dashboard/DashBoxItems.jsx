"use client";
import { Dropdown } from "flowbite-react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoCart } from "react-icons/io5";
import CircleProgressBar from "./CircleProgressBar";

const dashBoxData = [
  {
    label: "Sales Product",
    slug: "/purchase",
    count: "2341+",
    icon: <IoCart />,
  },
  {
    label: "Stock Products",
    slug: "/purchase",
    count: "178+",
    icon: <IoCart />,
  },
  {
    label: "Return Products",
    slug: "/purchase",
    count: "67+",
    icon: <IoCart />,
  },
  {
    label: "Sales Product",
    slug: "/purchase",
    count: "2341+",
    icon: <IoCart />,
  },
  {
    label: "Stock Products",
    slug: "/purchase",
    count: "178+",
    icon: <IoCart />,
  },
  {
    label: "Return Products",
    slug: "/purchase",
    count: "67+",
    icon: <IoCart />,
  },
  {
    label: "Sales Product",
    slug: "/purchase",
    count: "2341+",
    icon: <IoCart />,
  },
  {
    label: "Stock Products",
    slug: "/purchase",
    count: "178+",
    icon: <IoCart />,
  },
  {
    label: "Return Products",
    slug: "/purchase",
    count: "67+",
    icon: <IoCart />,
  },
];

const DashBoxItems = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {dashBoxData.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden z-[1] p-5 shadow-md rounded bg-white after:absolute after:-right-2 after:-bottom-1 after:h-20 after:w-20 after:bg-gray-50 after:rounded-full after:z-[-1]"
        >
          <div className="bg-primary/20 text-primary h-9 w-9 flex items-center justify-center rounded mb-2">
            {item.icon}
          </div>

          <Dropdown
            placement="left"
            renderTrigger={() => (
              <div className="absolute right-2 top-2 cursor-pointer duration-300 hover:bg-gray-100 h-7 w-7 flex items-center justify-center rounded-full">
                <HiOutlineDotsVertical />
              </div>
            )}
          >
            <Dropdown.Item href="/admin" icon={IoCart}>
              <span className="text-xs">Add Sale</span>
            </Dropdown.Item>
            <Dropdown.Item href="/admin" icon={IoCart}>
              <span className="text-xs">All Sale</span>
            </Dropdown.Item>
          </Dropdown>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xl font-bold text-dark-700">{item.count}</h4>
              <span className="text-sm text-gray-600">{item.label}</span>
            </div>

            {/* <CircleProgressBar percentage={75} /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashBoxItems;
