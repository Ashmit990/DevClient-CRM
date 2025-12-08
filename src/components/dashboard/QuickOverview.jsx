import React from 'react'
import { calculateLeads } from '../utils/calculatedLeads'
import { clustersData } from '../../data/clustersData'
import { calculateTotalDevelopers } from '../utils/calculateTotalDevelopers'
import { developersData } from '../../data/developersData'
import { countCompletedLeads } from '../utils/countCompletedLeads'
import { calculateInProcessLeads } from '../utils/calculateInProcessLeads'
import { countOverdueFollowups } from '../utils/countOverdueFollowups'
import { countTodayFollowups } from '../utils/countTodayFollowups'
import { countNewLeads } from '../utils/countNewLeads'



export const QuickOverview = () => {
  const totalLeads = calculateLeads(clustersData)
  const totalDevelopers = calculateTotalDevelopers(developersData)
  const totalCompletedLeads = countCompletedLeads(clustersData)
  const totalInProcessLeads = calculateInProcessLeads(clustersData)
  const totalOverdueFollowups = countOverdueFollowups(clustersData)
  const totalTodayFollowups = countTodayFollowups(clustersData)
  const totalNewLeads = countNewLeads(clustersData)

  return (
    <div className='w-[93.5%] border-2 border-black h-[150px]'>{totalLeads} and {totalDevelopers} and {totalCompletedLeads} and {totalInProcessLeads} and {totalOverdueFollowups} and {totalTodayFollowups} and {totalNewLeads}</div>
  )
}
