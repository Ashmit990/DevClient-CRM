import React from 'react';

export const QuickOverview = ({ label, value, unit, color = "text-gray-800" }) => {
  return (
    <div className='w-[252px] h-[150px] bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgba(164,174,191,0.1)] border border-[#F3F6FF] flex flex-col justify-center items-center group hover:border-[#6DA2F9]/30 transition-all duration-300'>
      {/* Label: Small, All-caps, Wide tracking */}
      <p className='text-[#A4AEBF] font-black text-[10px] uppercase tracking-[2px] mb-2'>
        {label}
      </p>
      
      {/* Value: Massive, Bold, High Contrast */}
      <div className='flex items-baseline'>
        <p className={`${color} font-black text-[48px] leading-none tracking-tighter`}>
          {value}
        </p>
        {unit && (
          <span className='text-[#6DA2F9] font-bold text-xl ml-1'>{unit}</span>
        )}
      </div>

      {/* Decorative accent bar that appears on hover */}
      <div className='w-8 h-1 bg-[#6DA2F9]/20 rounded-full mt-3 group-hover:w-16 group-hover:bg-[#6DA2F9] transition-all duration-500'></div>
    </div>
  );
};