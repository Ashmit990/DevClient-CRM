import React from 'react'

export const SidebarItems = ({iconClass, label}) => {
  return (
<div className="bg-[#3C5682] w-[120px] h-[25px] flex items-center mb-[20px] cursor-pointer group transition-all duration-300">
    <i className={`${iconClass} group-hover:!text-white transition-all duration-300 `} style={{color:'#c2cee2'}}></i>
    <p className="text-[#c2cee2] text-[14px] ml-[20px] group-hover:text-white transition-all duration-300 font-semibold">{label}</p>
</div>

  )
}
