import React from 'react';
import { Header } from '../components/ui/Header';
import { QuickOverview } from '../components/dashboard/QuickOverview';
import { quickOverviewData } from '../data/quickOverviewData';

// If you want to use the calculated values directly instead of the static quickOverviewData:
/*
import { calculatedLeads } from '../utils/calculatedLeads';
import { clustersData } from '../../data/clustersData';
... etc
*/

export const DashboardLayout = () => {
  return (
    <div className="w-[1085px] min-h-screen bg-[#F8F9FC] font-sans pb-10">
      {/* HEADER SECTION */}
      <div className="flex justify-between items-center w-full pr-[1px] mb-4">
        <Header title="Sales Dashboard" />
        
        {/* Added a date or status indicator to fill the top bar professionally */}
        <div className='text-[#A4AEBF] text-xs font-bold bg-white px-4 py-2 rounded-lg border border-[#F3F6FF] shadow-sm'>
          Dec 2025 • <span className='text-green-500'>Live Updates</span>
        </div>
      </div>

      {/* STATS OVERVIEW GRID */}
      <div className='w-full flex justify-between items-center gap-4'>
        {quickOverviewData.map((data, key) => (
          <QuickOverview 
            key={key} 
            label={data.label} 
            value={data.value} 
            unit={data.unit}
            // Use specific colors for specific labels
            color={
              data.label.includes("Completed") ? "text-green-500" :
              data.label.includes("Overdue") ? "text-red-500" :
              data.label.includes("Rate") ? "text-[#6DA2F9]" : "text-gray-800"
            }
          />
        ))}
      </div>

      {/* Placeholder for the rest of your dashboard (Charts, Tables, etc.) */}
      <div className='mt-8 grid grid-cols-12 gap-6'>
          {/* Your next components go here */}
      </div>
    </div>
  );
};