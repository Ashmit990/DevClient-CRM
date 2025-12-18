import React from 'react'
import { developersData } from '../data/developersData'
import { Header } from '../components/ui/Header';
import { Button } from '../components/ui/Button';

export const Demo = () => {
  const developer = developersData[0];

  if (!developer) return <div>No data found.</div>;

  return (
    /* MAIN CONTAINER */
    <div className="w-[1085px] h-[553px] mt-[-5px] bg-[#F8F9FC] font-sans flex flex-col overflow-hidden">

      {/* TOP BAR */}
      <div className="flex justify-between items-center w-full mb-4 shrink-0">
        <Header title="← Back To Team" />
        <Button label="Edit Profile" />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-10 flex-1 min-h-0">

        {/* LEFT COLUMN */}
        <div className="col-span-4 h-full min-h-0">
          <div className="bg-white rounded-[32px] p-8 shadow-[0_10px_40px_rgba(164,174,191,0.06)] border border-[#F3F6FF] flex flex-col items-center justify-center h-full overflow-hidden">

            {/* AVATAR */}
            <div className="relative mb-5 shrink-0">
              <img
                src={developer.image}
                alt={developer.name}
                className="w-28 h-28 rounded-full object-cover border-8 border-[#F8F9FC] shadow-md"
              />
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
            </div>

            <h2 className="text-2xl font-black text-gray-800 leading-tight">
              {developer.name}
            </h2>
            <p className="text-[#6DA2F9] text-sm font-bold mb-4">
              {developer.email}
            </p>

            <span className="px-4 py-1.5 bg-green-100 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-full">
              Active
            </span>

            {/* INFO */}
            <div className="w-full mt-6 pt-6 border-t border-[#F8F9FC] space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[#A4AEBF] font-black uppercase tracking-wider text-[10px]">
                  Phone
                </span>
                <span className="text-gray-700 font-bold">
                  {developer.phone}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#A4AEBF] font-black uppercase tracking-wider text-[10px]">
                  Joined
                </span>
                <span className="text-gray-700 font-bold">
                  {developer.dateJoined}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-8 flex flex-col gap-4 h-full min-h-0">

          {/* PRODUCTIVITY */}
          <div className="bg-white rounded-[32px] p-6 shadow-[0_10px_40px_rgba(164,174,191,0.06)] border border-[#F3F6FF] shrink-0">
            <p className="text-[#A4AEBF] text-[11px] font-black uppercase tracking-[2px] mb-4">
              Productivity Score
            </p>

            <div className="flex items-center gap-8">
              <h1 className="text-6xl font-black text-gray-800 leading-none">
                {developer.performanceScore}
                <span className="text-[#6DA2F9] text-3xl font-bold ml-1">%</span>
              </h1>

              <div className="flex-1">
                <div className="h-3 bg-[#F8F9FC] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#6DA2F9] rounded-full transition-all duration-700"
                    style={{ width: `${developer.performanceScore}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 shrink-0">
            <StatCard label="Total Leads" value={developer.totalLeadsHandled} />
            <StatCard label="Completed" value={developer.completed} color="text-green-500" />
            <StatCard label="In Progress" value={developer.inProgress} color="text-yellow-500" />
          </div>

          {/* CLUSTERS (SCROLL AREA) */}
          <div className="bg-white rounded-[32px] p-6 shadow-[0_10px_40px_rgba(164,174,191,0.06)] border border-[#F3F6FF] flex-1 min-h-0 flex flex-col">
            <h3 className="font-black text-gray-800 text-base mb-4 shrink-0">
              Assigned Clusters
            </h3>

            <div className="grid grid-cols-2 gap-3 overflow-y-auto pr-2">
              {developer.assignedClusters.map((cluster, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-4 py-3 bg-[#F8F9FC] rounded-xl border border-[#F3F6FF]"
                >
                  <div className="w-10 h-10 bg-[#6DA2F9]/10 rounded-lg flex items-center justify-center">
                    📍
                  </div>
                  <span className="font-bold text-gray-700 text-sm">
                    {cluster}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

/* STAT CARD */
const StatCard = ({ label, value, color = "text-gray-800" }) => (
  <div className="bg-white rounded-[24px] py-6 px-4 shadow-sm border border-[#F3F6FF] flex flex-col items-center justify-center">
    <p className="text-[#A4AEBF] text-[10px] font-black uppercase tracking-widest mb-2">
      {label}
    </p>
    <p className={`text-3xl font-black ${color}`}>
      {value}
    </p>
  </div>
);
