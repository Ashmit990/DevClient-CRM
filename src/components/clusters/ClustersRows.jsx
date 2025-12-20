export const ClustersRows = ({ val1, val2, val3, val4, val5 }) => {
  return (
    <div className="grid grid-cols-[2fr,1fr,1fr,1fr,1fr,0.5fr] bg-white text-[#455776] py-4 px-6 mb-2 rounded-lg font-medium hover:bg-[#F3F6FF] transition w-[102%] cursor-pointer">
      <p>{val1}</p>
      <p>{val2}</p>
      <p>{val3}</p>
      <p>{val4}</p>
      <p>{val5}</p>

      <div className="flex justify-center items-center">
        <i className="fa-solid fa-eye cursor-pointer"></i>
      </div>
    </div>
  );
};
