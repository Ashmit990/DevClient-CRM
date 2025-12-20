import React from "react"

export const StatCard = ({ label, value, color = "text-gray-800" }) => (
  <div className="bg-white rounded-[24px] py-6 px-4 shadow-sm border border-[#F3F6FF] flex flex-col items-center justify-center">
    <p className="text-[#A4AEBF] text-[10px] font-black uppercase tracking-widest mb-2">
      {label}
    </p>
    <p className={`text-3xl font-black ${color}`}>
      {value}
    </p>
  </div>
)