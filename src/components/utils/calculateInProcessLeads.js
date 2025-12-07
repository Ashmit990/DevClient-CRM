export const calculateInProcessLeads = (clustersData) => {
  return clustersData.reduce((count, cluster) => {
    const inProcessLeads = cluster.leads.filter(
      (lead) => lead.status === "In Process"
    ).length;

    return count + inProcessLeads;
  }, 0);
};
