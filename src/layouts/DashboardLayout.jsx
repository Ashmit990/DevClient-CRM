import React from 'react'
import { Header } from '../components/ui/Header'
import { QuickOverview } from '../components/dashboard/QuickOverview'

export const DashboardLayout = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full pr-[75px]">
        <Header title="Sales Dashboard" />
      </div>

      <div className='mt-[27px]'>
        <QuickOverview/>
      </div>
    </div>
  )
}
