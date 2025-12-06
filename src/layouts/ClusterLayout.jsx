import { Button } from "../components/ui/Button";
import { ClustersTable } from "../components/clusters/ClustersTable";
import { Header } from "../components/ui/Header";

const ClusterLayout = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full pr-[75px]">
        <Header title='Client Clusters'/>
        <Button label="Add Cluster" logo="+" />
      </div>

      <div className="w-[93.5%] h-[50px] mt-[27px]">
        <ClustersTable />
      </div>
    </>
  );
};

export default ClusterLayout;
