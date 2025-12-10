export const ClustersColumns = ({ col1, col2, col3, col4, col5 }) => {
  return (
    <div className="grid grid-cols-[2fr,1fr,1fr,1fr,1fr,0.5fr] bg-[#E7EDFB] text-[#8AB0F7] font-bold py-3 px-6 rounded-t-lg">
      <p>{col1}</p>
      <p>{col2}</p>
      <p>{col3}</p>
      <p>{col4}</p>
      <p>{col5}</p>

      {/* FILTER goes in separate column */}
      <div className="flex justify-center items-center">
        <i className="fa-solid fa-filter cursor-pointer"></i>
      </div>
    </div>
  );
};
