import React from "react";
import { SidebarItems } from "./SidebarItems";

export const Sidebar = () => {
  const sideBarItems = [
    { iconClass: "fa-solid fa-chart-line fa-lg", label: "Dashboard", path: "/dashboard" },
    { iconClass: "fa-solid fa-hexagon-nodes fa-lg", label: "Clusters", path: "/clusters" },
    { iconClass: "fa-solid fa-users fa-lg", label: "Developers", path: "/developers" }
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="w-[200px] h-[739px] bg-[#3C5682] flex flex-col items-center pt-[150px] pr-[40px] rounded-tr-3xl">
        <div className="flex justify-center items-center w-[100px] h-[50px] mt-[-120px] ml-[20px]">
          <i className="fa-brands fa-leanpub fa-2xl" style={{ color: "#6499F3", fontSize: "80px" }}></i>
        </div>

        <div className="mt-[80px]">
          {sideBarItems.map((item, index) => (
            <SidebarItems key={index} iconClass={item.iconClass} label={item.label} path={item.path} />
          ))}
        </div>
      </div>
    </div>
  );
};
