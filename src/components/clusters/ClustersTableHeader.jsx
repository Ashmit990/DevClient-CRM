import React from 'react'

export const ClustersTableHeader = () => {
  return (
    <div className="grid grid-cols-5 bg-[#E7EDFB] text-[#8AB0F7] font-bold py-3 px-6 rounded-t-lg">
      <p>Cluster Code</p>
      <p>Clients</p>
      <p>Overdue Followups</p>
      <p>Priority</p>
      <p>Last Assigned To</p>
    </div>
  )
}
