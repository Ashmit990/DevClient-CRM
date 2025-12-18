import React from "react";

export const Header = ({title,onclick}) => {
  return (
    <div onclick={onclick} className="text-[#455776] font-bold text-[25px] cursor-pointer">{title}</div>
  );
};
