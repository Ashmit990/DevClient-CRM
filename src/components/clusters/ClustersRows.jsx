import { useNavigate } from "react-router-dom";

export const ClustersRows = ({ id, val1, val2, val3, val4, val5 }) => {
  const navigate = useNavigate()
  const goToProfile = () => navigate(`/clusters/${id}`)

 
  let priorityStyle = ""
  if (val4 === "High") priorityStyle = "text-red-600 font-bold"
  else if (val4 === "Medium") priorityStyle = "text-yellow-500 font-bold"
  else if (val4 === "Low") priorityStyle = "text-blue-600 font-bold"

  return (
    <div className="grid grid-cols-[2fr,1fr,1fr,1fr,1fr,0.5fr] bg-white text-[#455776] py-4 px-6 mb-2 rounded-lg font-bold hover:bg-[#F3F6FF] transition w-[102%] cursor-pointer">
      <p>{val1}</p>
      <p>{val2}</p>
      <p>{val3}</p>
      <p className={priorityStyle}>{val4}</p>
      <p>{val5}</p>
      <div className="flex justify-center items-center">
        <i onClick={goToProfile} className="fa-solid fa-eye cursor-pointer"></i>
      </div>
    </div>
  )
}
