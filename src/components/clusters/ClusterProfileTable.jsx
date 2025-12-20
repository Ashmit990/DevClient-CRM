import React from "react";
import { ClusterProfileColumn } from "./ClusterProfileColumn";
import { ClusterProfileRows } from "./ClusterProfileRows";

export const ClusterProfileTable = ({ cluster, id }) => {
  return (
    <>
      <div className="w-[100%] h-[50px] mt-[27px]">
        <ClusterProfileColumn col1="Cluster" col2="Client Name" col3="Project Title" col4="Priority" col5="Status" col6="Assigned To" col7="Actions" />
      </div>

      <div className="w-[100%] h-[500px] mt-[10px] overflow-auto">
        {cluster.leads.map((elem, key) => (
          <ClusterProfileRows key={key} val1={id} val2={elem.clientName} val3={elem.projectTitle} val4={elem.priority} val5={elem.status} val6={elem.assignedDeveloper} />
        ))}
      </div>
    </>
  );
};
