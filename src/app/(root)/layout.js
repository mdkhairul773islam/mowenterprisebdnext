import LayoutProvider from "@/providers/LayoutProvider";
import React from "react";

const DashboardLayout = ({ children }) => {
  return <LayoutProvider>{children}</LayoutProvider>;
};

export default DashboardLayout;
