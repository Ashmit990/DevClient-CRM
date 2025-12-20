import React from 'react'


export const InfoRow = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-[#A4AEBF] font-black uppercase tracking-wider text-[10px]">
      {label}
    </span>
    <span className="text-gray-700 font-bold">
      {value}
    </span>
  </div>
)
