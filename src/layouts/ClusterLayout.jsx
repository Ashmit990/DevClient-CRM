import { Button } from "../components/ui/Button";
import { ClustersTable } from "../components/clusters/ClustersTable";
import { ClustersTableHeader } from "../components/clusters/ClustersTableHeader";
import { Header } from "../components/ui/Header";

const ClusterLayout = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full pr-[75px]">
        <Header title="Client Clusters" />
        <Button label="Add Cluster" logo="+" />
      </div>

      <div className="w-[92%] mt-[27px]">
        <ClustersTableHeader
          col1="Cluster Code"
          col2="Leads"
          col3="Overdue Followups"
          col4="Priority"
          col5="Last Assigned To"
        />
      </div>

      <div className="w-[93.5%] h-[500px] overflow-auto">
        <ClustersTable />
      </div>
    </>
  );
};

export default ClusterLayout;
