import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { Topbar } from '../components/navbar/Topbar'
import { ClustersRows } from '../components/clusters/ClustersRows'
import { ClustersHeader } from '../components/clusters/ClustersHeader'
import { Button } from '../components/ui/Button'
import { ClustersTableHeader } from '../components/clusters/ClustersTableHeader'
import { ClustersTable } from '../components/clusters/ClustersTable'

const DashboardLayout = () => {
  return (
    <>
      
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

     
      <div className="fixed left-[200px] top-0 right-0">
        <Topbar />
      </div>

      
      <div className="ml-[253px] mt-[130px] p-5 pl-[28px] bg-[#F8F9FC] h-[700px] w-[85%] fixed rounded-lg">
        <div className='flex justify-between items-center w-full pr-[75px]'>
          <ClustersHeader/>
          <Button label='Add Cluster' logo='+'/>
        </div>

        <div className='w-[93.5%] h-[50px]  mt-[27px]'>
          <ClustersTable/>
        </div>
        
      </div>
      
    </>
  )
}

export default DashboardLayout
