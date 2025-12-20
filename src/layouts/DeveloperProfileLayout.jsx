import React from 'react'
import { DeveloperProfile } from '../components/Developers/DeveloperProfile'
import { developersData } from '../data/developersData'


export const DeveloperProfileLayout = () => {
  return (
    <DeveloperProfile data={developersData}/>
  )
}
export default DeveloperProfileLayout
