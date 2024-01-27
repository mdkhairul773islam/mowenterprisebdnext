"use client";

import Header from "@/components/layouts/header/Header";
import Sidebar from "@/components/layouts/sidebar/Sidebar";
import { useState } from "react";

const LayoutProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      {/* Sidebar Area */}
      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

      <div
        className={`mainbody p-5 ml-0 duration-500 ${sidebarOpen && "active"}`}
      >
        {/* Header Area */}
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

        {/* Main Area */}
        <main>{children}</main>

        {/* Footer Area */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default LayoutProvider;
