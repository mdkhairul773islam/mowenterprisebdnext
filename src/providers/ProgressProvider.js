"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressProvider = ({ children }) => {
  return (
    <div className="z-[9999999999]">
      {children}
      <ProgressBar
        height="3px"
        color="#2563EB"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </div>
  );
};
export default ProgressProvider;
