export const clustersData = [
  {
    id: "KTM-FA-25",
    clusterCode: "KTM-FA-25",
    clients: 3,
    overdueFollowups: 1,
    priority: "High",
    lastAssignedTo: "Dev1",
    leads: [
      { id: 1, clientName: "David", projectTitle: "LMS", priority: "High", followupDate: "2025-12-08", status: "In Process", assignedDeveloper: "Dev1", history: [
        { date: "2025-11-01", actor: "Dev1", comment: "Explained project scope", status: "NFD" },
        { date: "2025-11-12", actor: "Dev1", comment: "Final Proposal Sent", status: "Completed" }
      ]},
      { id: 2, clientName: "Sarina", projectTitle: "Portfolio Website", priority: "Medium", followupDate: "2025-12-08", status: "In Process", assignedDeveloper: "Dev1", history: [
        { date: "2025-11-07", actor: "Dev1", comment: "Initial call done", status: "Followup" }
      ]},
      { id: 3, clientName: "Milan", projectTitle: "Gym Management App", priority: "Low", followupDate: "2025-11-22", status: "New Lead", assignedDeveloper: "Dev1", history: [] }
    ]
  },

  {
    id: "WDC-GV-24",
    clusterCode: "WDC-GV-24",
    clients: 3,
    overdueFollowups: 0,
    priority: "Medium",
    lastAssignedTo: "Dev2",
    leads: [
      { id: 4, clientName: "John Doe", projectTitle: "E-Commerce App", priority: "High", followupDate: "2025-11-12", status: "Completed", assignedDeveloper: "Dev2", history: [
        { date: "2025-11-02", actor: "Dev2", comment: "Sent requirements document", status: "NFD" },
        { date: "2025-11-10", actor: "Dev2", comment: "Deal closed", status: "Completed" }
      ]},
      { id: 5, clientName: "Aisha", projectTitle: "Personal Blog", priority: "Low", followupDate: "2025-11-25", status: "New Lead", assignedDeveloper: "Dev2", history: [] },
      { id: 6, clientName: "Hari", projectTitle: "POS System", priority: "Medium", followupDate: "2025-11-20", status: "In Process", assignedDeveloper: "Dev2", history: [] }
    ]
  },

  {
    id: "BKT-TR-22",
    clusterCode: "BKT-TR-22",
    clients: 3,
    overdueFollowups: 1,
    priority: "High",
    lastAssignedTo: "Dev3",
    leads: [
      { id: 7, clientName: "Megan", projectTitle: "Real-Estate CRM", priority: "High", followupDate: "2025-11-10", status: "Overdue", assignedDeveloper: "Dev3", history: [
        { date: "2025-10-30", actor: "Dev3", comment: "Discussed CRM flow", status: "NFD" }
      ]},
      { id: 8, clientName: "Krish", projectTitle: "Billing App", priority: "Medium", followupDate: "2025-11-19", status: "Completed", assignedDeveloper: "Dev3", history: [
        { date: "2025-11-03", actor: "Dev3", comment: "Demo provided", status: "Followup" },
        { date: "2025-11-15", actor: "Dev3", comment: "Deal finalized", status: "Completed" }
      ]},
      { id: 9, clientName: "Nikita", projectTitle: "Salon Booking System", priority: "Low", followupDate: "2025-11-23", status: "New Lead", assignedDeveloper: "Dev3", history: [] }
    ]
  },

  {
    id: "PKR-MN-20",
    clusterCode: "PKR-MN-20",
    clients: 2,
    overdueFollowups: 0,
    priority: "Medium",
    lastAssignedTo: "Dev4",
    leads: [
      { id: 10, clientName: "Liam", projectTitle: "Travel App", priority: "Medium", followupDate: "2025-11-21", status: "Completed", assignedDeveloper: "Dev4", history: [
        { date: "2025-11-05", actor: "Dev4", comment: "Prototype shared", status: "Followup" },
        { date: "2025-11-18", actor: "Dev4", comment: "Deal Closed", status: "Completed" }
      ]},
      { id: 11, clientName: "Olivia", projectTitle: "Food Delivery App", priority: "High", followupDate: "2025-11-19", status: "In Process", assignedDeveloper: "Dev4", history: [] }
    ]
  },

  {
    id: "CTN-PL-19",
    clusterCode: "CTN-PL-19",
    clients: 3,
    overdueFollowups: 1,
    priority: "High",
    lastAssignedTo: "Dev5",
    leads: [
      { id: 12, clientName: "Emma", projectTitle: "Healthcare Portal", priority: "High", followupDate: "2025-11-15", status: "Overdue", assignedDeveloper: "Dev5", history: [] },
      { id: 13, clientName: "Noah", projectTitle: "Event Management", priority: "Medium", followupDate: "2025-11-18", status: "Completed", assignedDeveloper: "Dev5", history: [
        { date: "2025-11-06", actor: "Dev5", comment: "Proposal sent", status: "Followup" },
        { date: "2025-11-13", actor: "Dev5", comment: "Deal Closed", status: "Completed" }
      ]},
      { id: 14, clientName: "Sophia", projectTitle: "Inventory App", priority: "Low", followupDate: "2025-11-22", status: "New Lead", assignedDeveloper: "Dev5", history: [] }
    ]
  },

  {
    id: "LDN-UK-18",
    clusterCode: "LDN-UK-18",
    clients: 2,
    overdueFollowups: 0,
    priority: "Medium",
    lastAssignedTo: "Dev6",
    leads: [
      { id: 15, clientName: "James", projectTitle: "Fitness Tracker", priority: "Medium", followupDate: "2025-11-17", status: "Completed", assignedDeveloper: "Dev6", history: [
        { date: "2025-11-03", actor: "Dev6", comment: "Initial discussion", status: "Followup" },
        { date: "2025-11-12", actor: "Dev6", comment: "Deal Closed", status: "Completed" }
      ]},
      { id: 16, clientName: "Isabella", projectTitle: "Recipe App", priority: "Low", followupDate: "2025-11-20", status: "In Process", assignedDeveloper: "Dev6", history: [] }
    ]
  },

  {
    id: "NYC-US-21",
    clusterCode: "NYC-US-21",
    clients: 3,
    overdueFollowups: 2,
    priority: "High",
    lastAssignedTo: "Dev7",
    leads: [
      { id: 17, clientName: "Benjamin", projectTitle: "Finance App", priority: "High", followupDate: "2025-11-11", status: "Overdue", assignedDeveloper: "Dev7", history: [] },
      { id: 18, clientName: "Mia", projectTitle: "Social Media App", priority: "Medium", followupDate: "2025-11-19", status: "Completed", assignedDeveloper: "Dev7", history: [
        { date: "2025-11-04", actor: "Dev7", comment: "Wireframing discussion", status: "Followup" },
        { date: "2025-11-12", actor: "Dev7", comment: "Closed Deal", status: "Completed" }
      ]},
      { id: 19, clientName: "Alexander", projectTitle: "Chat App", priority: "Low", followupDate: "2025-11-23", status: "New Lead", assignedDeveloper: "Dev7", history: [] }
    ]
  },

  {
    id: "SYD-AU-17",
    clusterCode: "SYD-AU-17",
    clients: 2,
    overdueFollowups: 0,
    priority: "Medium",
    lastAssignedTo: "Dev8",
    leads: [
      { id: 20, clientName: "Charlotte", projectTitle: "Travel Planner", priority: "Medium", followupDate: "2025-11-16", status: "Completed", assignedDeveloper: "Dev8", history: [
        { date: "2025-11-05", actor: "Dev8", comment: "Presentation shared", status: "Followup" },
        { date: "2025-11-15", actor: "Dev8", comment: "Deal Closed", status: "Completed" }
      ]},
      { id: 21, clientName: "William", projectTitle: "Photo Editor", priority: "Low", followupDate: "2025-11-21", status: "In Process", assignedDeveloper: "Dev8", history: [] }
    ]
  },

  {
    id: "TOR-CA-16",
    clusterCode: "TOR-CA-16",
    clients: 3,
    overdueFollowups: 1,
    priority: "High",
    lastAssignedTo: "Dev9",
    leads: [
      { id: 22, clientName: "Amelia", projectTitle: "Education App", priority: "High", followupDate: "2025-11-12", status: "Overdue", assignedDeveloper: "Dev9", history: [] },
      { id: 23, clientName: "Ethan", projectTitle: "Music Streaming", priority: "Medium", followupDate: "2025-11-19", status: "Completed", assignedDeveloper: "Dev9", history: [
        { date: "2025-11-05", actor: "Dev9", comment: "Feature discussion", status: "Followup" },
        { date: "2025-11-13", actor: "Dev9", comment: "Closed Deal", status: "Completed" }
      ]},
      { id: 24, clientName: "Harper", projectTitle: "Todo App", priority: "Low", followupDate: "2025-11-22", status: "New Lead", assignedDeveloper: "Dev9", history: [] }
    ]
  },

  {
    id: "BER-DE-15",
    clusterCode: "BER-DE-15",
    clients: 2,
    overdueFollowups: 0,
    priority: "Medium",
    lastAssignedTo: "Dev10",
    leads: [
      { id: 25, clientName: "Lucas", projectTitle: "News App", priority: "Medium", followupDate: "2025-11-18", status: "In Process", assignedDeveloper: "Dev10", history: [] },
      { id: 26, clientName: "Lily", projectTitle: "Fitness App", priority: "Low", followupDate: "2025-11-21", status: "Completed", assignedDeveloper: "Dev10", history: [
        { date: "2025-11-08", actor: "Dev10", comment: "Prototype shared", status: "Followup" },
        { date: "2025-11-17", actor: "Dev10", comment: "Closed Deal", status: "Completed" }
      ]}
    ]
  }
];
