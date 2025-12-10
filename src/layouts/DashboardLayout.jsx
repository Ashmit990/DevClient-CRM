import React from 'react'
import { Header } from '../components/ui/Header'
import { QuickOverview } from '../components/dashboard/QuickOverview'
import { countConversionRate } from '../components/utils/countConversionRate'
import { quickOverviewData } from '../data/quickOverviewData'

export const DashboardLayout = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full pr-[75px]">
        <Header title="Sales Dashboard" />
      </div>

      <div className='mt-[27px] w-[1085px] h-[150px] flex justify-between items-center'>
        {quickOverviewData.map((data, key)=>(
          <QuickOverview key={key} label={data.label} value={data.value} unit={data.unit}/>
        ))}
        
      </div>
      <div className='border-2 border-black w-[190px] h-[160px] rounded-md bg-[#F8F9FC] flex flex-col px-1'>
        <p className='font-semibold text-[20px] text-[#7A89A1]'>Filter By</p>
        <p className='font-semibold text-[15px] mt-[10px] text-[#7A89A1] w-full h-[30px] border-2 border-purple-600 rounded-md px-1 flex justify-center items-center'>Most Number of Leads</p>
      </div>
    </div>
  )
}
