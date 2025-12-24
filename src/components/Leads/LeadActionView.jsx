import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { clustersData } from '../../data/clustersData';
import { Header } from '../ui/Header';
import { Button } from '../ui/Button';

export const LeadActionView = () => {
  const {clusterId,leadId} = useParams()
  const navigate = useNavigate();
    const cluster = clustersData.find(c => c.id === clusterId);
    const lead = cluster?.leads.find(l => l.id === Number(leadId));
    console.log(lead)

    if (!cluster || !lead) return null; 

  
 

  const [status, setStatus] = useState(lead.status);
  const [priority, setPriority] = useState(lead.priority);
  const [comments, setComments] = useState(lead.history);
  const [newComment, setNewComment] = useState("");
  const [followupDate, setFollowupDate] = useState(lead.followupDate);

  const handleAddComment = () => {
    if (!newComment) return;
    const added = {
      date: new Date().toISOString().split('T')[0],
      actor: "Admin",
      comment: newComment,
      status: status
    };
    setComments([added, ...comments]);
    setNewComment("");
  };

  return (
    
    <div className='w-[1085px] h-[553px] bg-[#F8F9FC]  font-sans overflow-hidden flex flex-col gap-10 mt-[-5px]'>
      
      {/* HEADER - Increased margin bottom */}
      <div className="flex justify-between items-center w-full mb-0 shrink-0">
        <div onClick={() => navigate('/developers')} className="cursor-pointer">
          <Header title="Lead Action Console" />
        </div>
        <Button label="Save Changes" />
      </div>

      <div className="grid grid-cols-12 gap-8 flex-1 min-h-0 mt-[-15px]">
        
        {/* LEFT BOX: Lead Info & Status */}
        <div className="col-span-5 flex flex-col h-full">
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-[#F3F6FF] flex-1">
            <p className="text-[#A4AEBF] text-[12px] font-black uppercase tracking-widest mb-6">Lead Details</p>
            
            <div className="space-y-6">
              <div>
                <label className="text-[12px] font-black text-[#A4AEBF] uppercase">Client Name</label>
                {/* Bumped to text-2xl */}
                <p className="text-2xl font-black text-gray-800 tracking-tight">{lead.clientName}</p>
              </div>
              <div>
                <label className="text-[12px] font-black text-[#A4AEBF] uppercase">Cluster ID</label>
                {/* Bumped to text-base */}
                <p className="text-base font-bold text-[#6DA2F9]">{cluster.clusterCode}</p>
              </div>

              {/* EDITABLE SELECTORS */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#F8F9FC]">
                <div>
                  <label className="text-[11px] font-black text-[#A4AEBF] uppercase block mb-2">Priority</label>
                  <select 
                    value={priority} 
                    onChange={(e) => setPriority(e.target.value)}
                    // Bumped to text-sm
                    className="w-full bg-[#F8F9FC] border-none rounded-lg p-3 text-sm font-bold text-gray-700 focus:ring-2 focus:ring-[#6DA2F9]"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-black text-[#A4AEBF] uppercase block mb-2">Status</label>
                  <select 
                    value={status} 
                    onChange={(e) => setStatus(e.target.value)}
                    // Bumped to text-sm
                    className="w-full bg-[#F8F9FC] border-none rounded-lg p-3 text-sm font-bold text-gray-700 focus:ring-2 focus:ring-[#6DA2F9]"
                  >
                    <option value="In Process">In Process</option>
                    <option value="Completed">Completed</option>
                    <option value="Overdue">Overdue</option>
                    <option value="New Lead">New Lead</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <label className="text-[11px] font-black text-[#A4AEBF] uppercase block mb-2">Next Followup</label>
                <input 
                  type="date" 
                  value={followupDate}
                  onChange={(e) => setFollowupDate(e.target.value)}
                  // Bumped to text-sm and p-3
                  className="w-full bg-[#F8F9FC] border-none rounded-lg p-3 text-sm font-bold text-gray-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT BOX: Comments & History */}
        <div className="col-span-7 flex flex-col gap-6 h-full min-h-0">
          
          {/* COMMENT FEED */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-[#F3F6FF] flex-1 flex flex-col min-h-0">
            <p className="text-[#A4AEBF] text-[12px] font-black uppercase tracking-widest mb-6">Interaction History</p>
            
            <div className="flex-1 overflow-y-auto pr-2 space-y-5 custom-scrollbar">
              {comments.map((log, i) => (
                <div key={i} className="bg-[#F8F9FC] p-5 rounded-2xl border border-[#F3F6FF]">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[11px] font-black text-[#6DA2F9] uppercase tracking-wider">{log.actor}</span>
                    <span className="text-[11px] font-bold text-[#A4AEBF]">{log.date}</span>
                  </div>
                  {/* Bumped to text-sm */}
                  <p className="text-sm text-gray-700 leading-relaxed font-semibold">{log.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ADD COMMENT BOX */}
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#F3F6FF]">
            <div className="flex gap-4">
              <textarea 
                placeholder="Type a comment or update..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                // Bumped to text-sm and h-80px
                className="flex-1 bg-[#F8F9FC] border-none rounded-xl p-4 text-sm font-semibold focus:ring-2 focus:ring-[#6DA2F9] resize-none h-[80px]"
              />
              <button 
                onClick={handleAddComment}
                className="bg-[#6DA2F9] text-white px-6 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#5B92E8] transition-all"
              >
                Post
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};