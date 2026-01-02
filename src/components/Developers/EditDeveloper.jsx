import { useParams, useNavigate } from "react-router-dom";
import { developersData } from "../../data/developersData";
import { Header } from "../ui/Header";

export const EditDeveloper = () => {
  const { developerId } = useParams();
  const navigate = useNavigate();

  const developer = developersData.find(d => d.id === developerId);

  if (!developer) {
    return <div className="p-10">Lol</div>;
  }

  return (
    <div className="w-[1085px] bg-[#F8F9FC] p-6">
      <div
        className="cursor-pointer mb-6"
        onClick={() => navigate(`/developers/${developerId}`)}
      >
        <Header title="← Back to Profile" />
      </div>

      <h1 className="text-2xl font-black mb-6">Edit Developer</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <div>
          <label className="block font-bold">Name</label>
          <input
            defaultValue={developer.name}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-bold">Email</label>
          <input
            defaultValue={developer.email}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate(`/developers/${developerId}`)}
            className="px-6 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>

          <button className="px-6 py-2 bg-[#6DA2F9] text-white rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
