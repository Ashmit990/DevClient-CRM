export const countConversionRate = (totalLeads, completedLeads) => {
    if (totalLeads === 0) return 0
    return Math.round((completedLeads/totalLeads)*100)
}