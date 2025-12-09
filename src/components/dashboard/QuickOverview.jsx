import React from 'react'
import { calculatedLeads } from '../utils/calculatedLeads'
import { clustersData } from '../../data/clustersData'
import { calculateTotalDevelopers } from '../utils/calculateTotalDevelopers'
import { developersData } from '../../data/developersData'
import { countCompletedLeads } from '../utils/countCompletedLeads'
import { calculateInProcessLeads } from '../utils/calculateInProcessLeads'
import { countOverdueFollowups } from '../utils/countOverdueFollowups'
import { countTodayFollowups } from '../utils/countTodayFollowups'
import { countNewLeads } from '../utils/countNewLeads'
import { countConversionRate } from '../utils/countConversionRate'
import { quickOverviewData } from '../../data/quickOverviewData'

  const totalLeads = calculatedLeads(clustersData)
  const totalDevelopers = calculateTotalDevelopers(developersData)
  const totalCompletedLeads = countCompletedLeads(clustersData)
  const totalInProcessLeads = calculateInProcessLeads(clustersData)
  const totalOverdueFollowups = countOverdueFollowups(clustersData)
  const totalTodayFollowups = countTodayFollowups(clustersData)
  const totalNewLeads = countNewLeads(clustersData)
  const conversionRate = countConversionRate(totalLeads, totalCompletedLeads)




export const QuickOverview = ({id, label, value, unit}) => {


  return (
    <>
      <div className='w-[252px] h-[150px] shadow-sm rounded-lg bg-white py-[20px] flex flex-col justify-between items-center'>
        <p className='text-[#7A89A1] font-semibold'>{label}</p>
      </div>
    </>
  )
}
