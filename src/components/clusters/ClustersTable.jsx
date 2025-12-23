import React from "react";
import { ClustersColumns } from "./ClustersColumns";
import { ClustersRows } from "./ClustersRows";
import { clustersData } from "../../data/clustersData";

export const ClustersTable = () => {
  
  return (
    <>
      <div className="w-[100%] h-[50px]  mt-[27px] ">
        <ClustersColumns col1='Cluster Code'col2='Leads' col3='Overdue Followups' col4='Priority' col5='Last Assigned To' />
      </div>

      <div className="w-[100%] h-[500px] mt-[10px] overflow-auto ">
        {clustersData.map((elem, key) => (
          <ClustersRows
            id={elem.id}
            key={key}
            val1={elem.clusterCode}
            val2={elem.clients}
            val3={elem.overdueFollowups}
            val4={elem.priority}
            val5={elem.lastAssignedTo}
          />
        ))}
      </div>
    </>
  );
};
