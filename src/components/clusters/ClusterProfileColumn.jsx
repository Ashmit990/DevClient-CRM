import React from 'react';

export const ClusterProfileColumn = ({ col1, col2, col3, col4, col5, col6, col7 }) => {
  return (
    <div className="grid grid-cols-[1.2fr,2fr,2.5fr,1.2fr,1.5fr,1.2fr,1fr] bg-[#E7EDFB] text-[#8AB0F7] font-bold py-3 px-6 rounded-t-lg">
      <p>{col1}</p>
      <p>{col2}</p>
      <p>{col3}</p>
      <p>{col4}</p>
      <p>{col5}</p>
      <p>{col6}</p>
      <p className="text-center">{col7}</p>
    </div>
  );
};
