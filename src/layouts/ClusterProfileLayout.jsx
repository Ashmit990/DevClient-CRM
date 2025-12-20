import React from 'react'
import { ClusterProfile } from '../components/clusters/ClusterProfile'
import { clustersData } from '../data/clustersData'


export const ClusterProfileLayout = () => {
  return (
    <ClusterProfile data={clustersData}/>
  )
}
