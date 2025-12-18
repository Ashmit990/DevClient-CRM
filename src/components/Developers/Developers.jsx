import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Developers = ({
  id,
  url,
  name,
  skills,
  score,
  completed,
  inprogress,
  email
}) => {
  const navigate = useNavigate()
  const scoreColor = score >= 80 ? 'bg-[#6DA2F9]' : 'bg-yellow-400'

  const goToProfile = () => {
    navigate(`/developers/${id}`)
  }

  return (
    <div
      
      className="w-[310px] h-[440px] rounded-[24px] bg-white border border-[#F3F6FF] shadow-[0_20px_50px_rgba(164,174,191,0.15)] hover:shadow-[0_20px_60px_rgba(109,162,249,0.2)] transition-all duration-500 flex flex-col overflow-hidden group mt-[30px] cursor-pointer"
    >

      {/* TOP */}
      <div className="p-4 flex flex-col items-center">
        <div className="relative">
          <img
            src={url}
            alt={name}
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </div>

        <h3 className="mt-3 text-[20px] font-bold text-[#1A1C1E] tracking-tight">
          {name}
        </h3>
        <p className="text-[#6DA2F9] font-medium text-sm">
          {email}
        </p>
      </div>

      {/* BODY */}
      <div className="px-6 space-y-3">
        <div>
          <div className="flex justify-between items-end mb-1">
            <span className="text-[11px] font-bold text-[#A4AEBF] uppercase tracking-wider">
              Performance
            </span>
            <span className="text-lg font-black text-[#1A1C1E]">
              {score}%
            </span>
          </div>

          <div className="w-full h-[7px] bg-[#F3F6FF] rounded-full overflow-hidden">
            <div
              className={`h-full ${scoreColor} rounded-full transition-all duration-1000`}
              style={{ width: `${score}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="bg-[#F8F9FC] p-2 rounded-2xl border border-[#F3F6FF] text-center">
            <p className="text-[10px] font-bold text-[#A4AEBF] uppercase">
              Completed
            </p>
            <p className="text-xl font-bold text-gray-800">
              {completed}
            </p>
          </div>

          <div className="bg-[#F8F9FC] p-2 rounded-2xl border border-[#F3F6FF] text-center">
            <p className="text-[10px] font-bold text-[#A4AEBF] uppercase">
              In Progress
            </p>
            <p className="text-xl font-bold text-gray-800">
              {inprogress}
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-auto p-4 bg-[#F3F6FF]/50 backdrop-blur-sm border-t border-white/50">
        <div className="flex flex-wrap gap-2 mb-3">
          {skills?.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white text-[#7A89A1] text-[11px] font-bold rounded-lg shadow-sm border border-[#A4AEBF]/10"
            >
              {skill}
            </span>
          ))}
          {skills?.length > 3 && (
            <span className="text-[11px] text-[#A4AEBF] font-bold self-center">
              +{skills.length - 3}
            </span>
          )}
        </div>

        {/* STOP event bubbling so card click doesn’t double fire */}
        <button
  onClick={goToProfile}
          className="w-full py-2 bg-white text-[#6DA2F9] font-bold rounded-xl border border-[#6DA2F9]/20 hover:bg-[#6DA2F9] hover:text-white shadow-sm hover:shadow-[#6DA2F9]/30 transition-all duration-300 active:scale-95"
        >
          View Full Profile
        </button>
      </div>

    </div>
  )
}
