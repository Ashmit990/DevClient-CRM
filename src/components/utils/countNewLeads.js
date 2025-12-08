export const countNewLeads = (clustersData) => {
  return clustersData.reduce((count, cluster) => {
    const newLeads = cluster.leads.filter(
      (lead) => lead.status === "In Process"
    ).length;

    return count + newLeads;
  }, 0);
};
