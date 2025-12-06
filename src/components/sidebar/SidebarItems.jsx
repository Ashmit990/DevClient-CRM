import React from "react";
import { NavLink } from "react-router-dom";

export const SidebarItems = ({ iconClass, label, path }) => {
  return (
    <NavLink to={path} className="bg-[#3C5682] w-[120px] h-[25px] flex items-center mb-[20px] cursor-pointer group transition-all duration-300">
      {({ isActive }) => <>
        <i className={`${iconClass} transition-all duration-300 ${isActive ? "text-white" : "text-[#c2cee2] group-hover:text-white"}`}></i>
        <p className={`text-[14px] ml-[20px] transition-all duration-300 font-semibold ${isActive ? "text-white" : "text-[#c2cee2] group-hover:text-white"}`}>{label}</p>
      </>}
    </NavLink>
  );
};
