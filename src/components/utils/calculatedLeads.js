export const calculatedLeads = (data) => {
  return data.reduce((total, cluster) => total + cluster.leads.length, 0);
};
