export const countOverdueFollowups = (data) => {
  const today = new Date();

  return data.reduce((total, cluster) => {
    const overdueLeads = cluster.leads.filter((lead) => {
      const followup = new Date(lead.followupDate);
      return followup < today && lead.status !== "Completed";
    });

    return total + overdueLeads.length;
  }, 0);
};
