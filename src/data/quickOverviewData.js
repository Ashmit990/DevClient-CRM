import { calculateTotalDevelopers } from "../components/utils/calculateTotalDevelopers"
import { calculatedLeads } from "../components/utils/calculatedLeads"
import { countCompletedLeads } from "../components/utils/countCompletedLeads"
import { countConversionRate } from "../components/utils/countConversionRate"
import { clustersData } from "./clustersData"
import { developersData } from "./developersData"



const totalLeads = calculatedLeads(clustersData)
const totalDevelopers = calculateTotalDevelopers(developersData)
const totalCompletedLeads = countCompletedLeads(clustersData)
const conversionRate = countConversionRate(totalLeads, totalCompletedLeads)

export const quickOverviewData = [
  {
    id: "leads",
    label: "Total Leads",
    value: totalLeads,
    unit: "",
  },
  {
    id: "developers",
    label: "Developers",
    value: totalDevelopers,
    unit: "",
  },
  {
    id: "conversions",
    label: "Conversions",
    value: totalCompletedLeads,
    unit: "",
  },
  {
    id: "rate",
    label: "Conversion Rate",
    value: conversionRate,
    unit: "%",
  },
]

