export const countCompletedLeads = (data) => {
  return data.reduce(
    (sum, c) => sum + c.leads.filter(l => l.status === "Completed").length,
    0
  )
}
