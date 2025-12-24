import React from 'react';
import { Header } from '../components/ui/Header';
import { QuickOverview } from '../components/dashboard/QuickOverview';
import { quickOverviewData } from '../data/quickOverviewData';



export const DashboardLayout = () => {
  return (
    <div className="w-[1085px] min-h-screen bg-[#F8F9FC] font-sans pb-10">
      
      <div className="flex justify-between items-center w-full pr-[1px] mb-4">
        <Header title="Sales Dashboard" />
        
        
        <div className='text-[#A4AEBF] text-xs font-bold bg-white px-4 py-2 rounded-lg border border-[#F3F6FF] shadow-sm'>
          Dec 2025 • <span className='text-green-500'>Live Updates</span>
        </div>
      </div>

      
      <div className='w-full flex justify-between items-center gap-4'>
        {quickOverviewData.map((data, key) => (
          <QuickOverview 
            key={key} 
            label={data.label} 
            value={data.value} 
            unit={data.unit}
            color={
              data.label.includes("Completed") ? "text-green-500" :
              data.label.includes("Overdue") ? "text-red-500" :
              data.label.includes("Rate") ? "text-[#6DA2F9]" : "text-gray-800"
            }
          />
        ))}
      </div>

      
      <div className='mt-8 grid grid-cols-12 gap-6'>
        
      </div>
    </div>
  );
};