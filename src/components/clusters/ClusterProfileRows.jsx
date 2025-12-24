import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ClusterProfileRows = ({
  clusterId,
  leadId,
  val1, val2, val3, val4, val5, val6
}) => {
  const navigate = useNavigate();

  let priorityStyle = "";
  let statusStyle = "";

  if (val4 === "High") priorityStyle = "text-red-600 font-bold";
  else if (val4 === "Medium") priorityStyle = "text-yellow-500 font-bold";
  else if (val4 === "Low") priorityStyle = "text-blue-600 font-bold";

  if (val5 === "Completed") statusStyle = "text-green-500 font-bold";
  else if (val5 === "In Process") statusStyle = "text-orange-400 font-bold";
  else if (val5 === "New Lead") statusStyle = "text-sky-500 font-bold";
  else if (val5 === "Overdue") statusStyle = "text-purple-300 font-bold";

  return (
    <div className="grid grid-cols-[1.2fr,2fr,2.5fr,1.2fr,1.5fr,1.2fr,1fr] bg-white py-4 px-6 mb-2 rounded-lg hover:bg-[#F3F6FF] transition">
      <p>{val1}</p>
      <p>{val2}</p>
      <p>{val3}</p>
      <p className={priorityStyle}>{val4}</p>
      <p className={statusStyle}>{val5}</p>
      <p>{val6}</p>

      <div className="flex justify-center">
        <button
          onClick={() => navigate(`/clusters/${clusterId}/${leadId}`)}
          className="bg-[#6DA2F9] text-white w-[110px] h-[35px] rounded-md hover:bg-[#5a91f2] transition"
        >
          Action
        </button>
      </div>
    </div>
  );
};
