import React from 'react'

export const ClustersRows = ({ val1, val2, val3, val4, val5 }) => {
  return (
    <div className="grid grid-cols-5 bg-white text-[#9EAABE] py-4 px-6 mt-[10px] rounded-lg font-medium">
      <p>{val1}</p>
      <p>{val2}</p>
      <p>{val3}</p>
      <p>{val4}</p>
      <p>{val5}</p>
    </div>
  )
}
