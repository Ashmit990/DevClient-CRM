import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Topbar } from "../components/navbar/Topbar";

export const RootLayout = () => {
  return (
    <>
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      <div className="fixed left-[200px] top-0 right-0">
        <Topbar />
      </div>

      <div className="fixed ml-[253px] mt-[130px] p-5 pl-[28px] bg-[#F8F9FC] h-[700px] w-[85%] rounded-lg">
        <Outlet />
      </div>
    </>
  );
};
