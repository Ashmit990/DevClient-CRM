import React from 'react'
import { calculateLeads } from '../utils/calculatedLeads'
import { clustersData } from '../../data/clustersData'
import { calculateTotalDevelopers } from '../utils/calculateTotalDevelopers'
import { developersData } from '../../data/developersData'
import { countCompletedLeads } from '../utils/countCompletedLeads'
import { calculateInProcessLeads } from '../utils/calculateInProcessLeads'



export const QuickOverview = () => {
  const totalLeads = calculateLeads(clustersData)
  const totalDevelopers = calculateTotalDevelopers(developersData)
  const totalCompletedLeads = countCompletedLeads(clustersData)
  const totalInProcessLeads = calculateInProcessLeads(clustersData)

  return (
    <div className='w-[93.5%] border-2 border-black h-[150px]'>{totalLeads} and {totalDevelopers} and {totalCompletedLeads} and {totalInProcessLeads}</div>
  )
}
