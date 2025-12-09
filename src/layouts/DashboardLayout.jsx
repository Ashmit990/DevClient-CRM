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
          <QuickOverview key={key} label={data.label}/>
        ))}
        
      </div>
    </div>
  )
}
