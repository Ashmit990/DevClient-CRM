import React from "react";
import userImg from "../../assets/user.jpg";

export const Topbar = () => {
  return (
    <div className="w-[92%] h-[58px] rounded-lg mt-[25px] ml-[50px] flex justify-between items-center">
      <div className="flex h-full items-center relative w-[100%]">
        <i className="fa-solid fa-magnifying-glass fa-lg absolute left-7" style={{ color: "#A4AEBF" }}></i>
        <input
          className="w-[95%] h-full bg-[#F8F9FC] rounded-lg pl-[70px] text-[#455776] font-medium border-none outline-none"
          placeholder="Search"
          type="text"
        />
      </div>

      <div className="w-[17%] h-full flex justify-between items-center">
        <p className="text-[#455776] font-medium">Hi, Ashmit</p>
        <img className="w-[55px]" src={userImg} alt="" />
      </div>
    </div>
  );
};
