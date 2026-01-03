import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { developersData } from "../../data/developersData";
import { Header } from "../ui/Header";

export const EditDeveloper = () => {
  const { developerId } = useParams();
  const navigate = useNavigate();

  const developer = developersData.find(d => d.id === developerId);

  if (!developer) return <div className="p-10">Developer not found</div>;

  const [devName, setDevName] = useState(developer.name);
  const [devEmail, setDevEmail] = useState(developer.email);
  const [devPhone, setDevPhone] = useState(developer.phone);
  const [devSkills, setDevSkills] = useState(developer.skills);

  return (
    <div className="w-[1085px] bg-[#F8F9FC] p-6">

      <div className="cursor-pointer mb-6" onClick={() => navigate(`/developers/${developerId}`)}>
        <Header title="← Back to Profile" />
      </div>

      <h1 className="text-2xl font-black mb-6">Edit Developer</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <div>
          <label className="block font-bold">Name</label>
          <input value={devName} onChange={e => setDevName(e.target.value)} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-bold">Email</label>
          <input value={devEmail} onChange={e => setDevEmail(e.target.value)} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-bold">Phone</label>
          <input value={devPhone} onChange={e => setDevPhone(e.target.value)} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-bold">Skills</label>
          <input value={devSkills} onChange={e => setDevSkills(e.target.value)} className="w-full border p-2 rounded" placeholder="React, Node, PHP" />
        </div>

        <div className="flex gap-4 pt-4">
          <button onClick={() => navigate(`/developers/${developerId}`)} className="px-6 py-2 bg-gray-200 rounded">Cancel</button>
          <button onClick={() => { console.log({ devName, devEmail, devPhone, devSkills }); navigate(`/developers/${developerId}`); }} className="px-6 py-2 bg-[#6DA2F9] text-white rounded">Save</button>
        </div>

      </div>

    </div>
  );
};
