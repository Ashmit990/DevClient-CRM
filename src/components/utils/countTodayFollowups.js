export const countTodayFollowups = (data) => {
  const today = new Date();

  return data.reduce((total, cluster) => {
    const count = cluster.leads.filter((lead) => {
      const d = new Date(lead.followupDate);
      return (
        d.getDate() === today.getDate() &&
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear() &&
        lead.status !== "Completed"
      );
    }).length;

    return total + count;
  }, 0);
};
