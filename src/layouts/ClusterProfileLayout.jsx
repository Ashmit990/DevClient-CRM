import React from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import { Header } from '../components/ui/Header';
import { Button } from '../components/ui/Button';
import { clustersData } from '../data/clustersData';
import { ClusterProfileTable } from '../components/clusters/ClusterProfileTable';


export const ClusterProfileLayout = () => {
  const navigate = useNavigate();
  const { clusterId } = useParams();
  const cluster = clustersData.find(cluster => cluster.id === clusterId);

  console.log(cluster);

  return (
    <>
      <div className="flex items-center justify-between w-[1085px] mb-4 shrink-0">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('/clusters')}
        >
          <Header title="← Back To Clusters" />
        </div>

        <Button label="Add Lead" logo="+" />
      </div>

      <div className="w-[93.5%] h-[500px]">
        <ClusterProfileTable id={clusterId} cluster={cluster} />
      </div>

      {/* Renders nested route (LeadActionView) */}
     
    </>
  );
};
