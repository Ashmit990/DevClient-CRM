import React from "react";

export const ClustersTableHeader = ({ col1, col2, col3, col4, col5 }) => {
  return (
    <>
      <div className="grid grid-cols-5 bg-[#E7EDFB] text-[#8AB0F7] font-bold py-3 px-6 rounded-t-lg">
        <p>{col1}</p>
        <p>{col2}</p>
        <p>{col3}</p>
        <p>{col4}</p>
        <div className="flex justify-between items-center">
          <p>{col5}</p>
          <i className="fa-solid fa-filter ml-2 cursor-pointer"></i>
        </div>
      </div>
    </>
  );
};
