export const clustersData = [
  {
    clusterCode: "KTM-FA-25",
    clients: 3,
    overdueFollowups: 1,
    priority: "High",
    lastAssignedTo: "Dev1",
    leads: [
      {
        clientName: "David",
        projectTitle: "LMS",
        priority: "High",
        followupDate: "2025-11-16",
        status: "In Process",
        assignedDeveloper: "Dev1",
        history: [{ date: "2025-11-01", actor: "Dev1", comment: "Explained project scope", status: "NFD" }]
      },
      {
        clientName: "Sarina",
        projectTitle: "Portfolio Website",
        priority: "Medium",
        followupDate: "2025-11-18",
        status: "New Lead",
        assignedDeveloper: "Dev1",
        history: []
      },
      {
        clientName: "Milan",
        projectTitle: "Gym Management App",
        priority: "Low",
        followupDate: "2025-11-22",
        status: "New Lead",
        assignedDeveloper: "Dev1",
        history: []
      }
    ]
  },
  {
    clusterCode: "WDC-GV-24",
    clients: 3,
    overdueFollowups: 0,
    priority: "Medium",
    lastAssignedTo: "Dev2",
    leads: [
      {
        clientName: "John Doe",
        projectTitle: "E-Commerce App",
        priority: "High",
        followupDate: "2025-11-12",
        status: "In Process",
        assignedDeveloper: "Dev2",
        history: [{ date: "2025-11-02", actor: "Dev2", comment: "Sent requirements document", status: "NFD" }]
      },
      {
        clientName: "Aisha",
        projectTitle: "Personal Blog",
        priority: "Low",
        followupDate: "2025-11-25",
        status: "New Lead",
        assignedDeveloper: "Dev2",
        history: []
      },
      {
        clientName: "Hari",
        projectTitle: "POS System",
        priority: "Medium",
        followupDate: "2025-11-20",
        status: "In Process",
        assignedDeveloper: "Dev2",
        history: []
      }
    ]
  },
  {
    clusterCode: "BKT-TR-22",
    clients: 3,
    overdueFollowups: 1,
    priority: "High",
    lastAssignedTo: "Dev3",
    leads: [
      {
        clientName: "Megan",
        projectTitle: "Real-Estate CRM",
        priority: "High",
        followupDate: "2025-11-10",
        status: "Overdue",
        assignedDeveloper: "Dev3",
        history: [{ date: "2025-10-30", actor: "Dev3", comment: "Discussed CRM flow", status: "NFD" }]
      },
      {
        clientName: "Krish",
        projectTitle: "Billing App",
        priority: "Medium",
        followupDate: "2025-11-19",
        status: "In Process",
        assignedDeveloper: "Dev3",
        history: []
      },
      {
        clientName: "Nikita",
        projectTitle: "Salon Booking System",
        priority: "Low",
        followupDate: "2025-11-23",
        status: "New Lead",
        assignedDeveloper: "Dev3",
        history: []
      }
    ]
  },

  // ----------- 7 more clusters -----------

  {
    clusterCode: "PKR-MN-20",
    clients: 2,
    overdueFollowups: 0,
    priority: "Medium",
    lastAssignedTo: "Dev4",
    leads: [
      { clientName: "Liam", projectTitle: "Travel App", priority: "Medium", followupDate: "2025-11-21", status: "New Lead", assignedDeveloper: "Dev4", history: [] },
      { clientName: "Olivia", projectTitle: "Food Delivery App", priority: "High", followupDate: "2025-11-19", status: "In Process", assignedDeveloper: "Dev4", history: [] }
    ]
  },
  {
    clusterCode: "CTN-PL-19",
    clients: 3,
    overdueFollowups: 1,
    priority: "High",
    lastAssignedTo: "Dev5",
    leads: [
      { clientName: "Emma", projectTitle: "Healthcare Portal", priority: "High", followupDate: "2025-11-15", status: "Overdue", assignedDeveloper: "Dev5", history: [] },
      { clientName: "Noah", projectTitle: "Event Management", priority: "Medium", followupDate: "2025-11-18", status: "In Process", assignedDeveloper: "Dev5", history: [] },
      { clientName: "Sophia", projectTitle: "Inventory App", priority: "Low", followupDate: "2025-11-22", status: "New Lead", assignedDeveloper: "Dev5", history: [] }
    ]
  },
  {
    clusterCode: "LDN-UK-18",
    clients: 2,
    overdueFollowups: 0,
    priority: "Medium",
    lastAssignedTo: "Dev6",
    leads: [
      { clientName: "James", projectTitle: "Fitness Tracker", priority: "Medium", followupDate: "2025-11-17", status: "New Lead", assignedDeveloper: "Dev6", history: [] },
      { clientName: "Isabella", projectTitle: "Recipe App", priority: "Low", followupDate: "2025-11-20", status: "In Process", assignedDeveloper: "Dev6", history: [] }
    ]
  },
  {
    clusterCode: "NYC-US-21",
    clients: 3,
    overdueFollowups: 2,
    priority: "High",
    lastAssignedTo: "Dev7",
    leads: [
      { clientName: "Benjamin", projectTitle: "Finance App", priority: "High", followupDate: "2025-11-11", status: "Overdue", assignedDeveloper: "Dev7", history: [] },
      { clientName: "Mia", projectTitle: "Social Media App", priority: "Medium", followupDate: "2025-11-19", status: "In Process", assignedDeveloper: "Dev7", history: [] },
      { clientName: "Alexander", projectTitle: "Chat App", priority: "Low", followupDate: "2025-11-23", status: "New Lead", assignedDeveloper: "Dev7", history: [] }
    ]
  },
  {
    clusterCode: "SYD-AU-17",
    clients: 2,
    overdueFollowups: 0,
    priority: "Medium",
    lastAssignedTo: "Dev8",
    leads: [
      { clientName: "Charlotte", projectTitle: "Travel Planner", priority: "Medium", followupDate: "2025-11-16", status: "New Lead", assignedDeveloper: "Dev8", history: [] },
      { clientName: "William", projectTitle: "Photo Editor", priority: "Low", followupDate: "2025-11-21", status: "In Process", assignedDeveloper: "Dev8", history: [] }
    ]
  },
  {
    clusterCode: "TOR-CA-16",
    clients: 3,
    overdueFollowups: 1,
    priority: "High",
    lastAssignedTo: "Dev9",
    leads: [
      { clientName: "Amelia", projectTitle: "Education App", priority: "High", followupDate: "2025-11-12", status: "Overdue", assignedDeveloper: "Dev9", history: [] },
      { clientName: "Ethan", projectTitle: "Music Streaming", priority: "Medium", followupDate: "2025-11-19", status: "In Process", assignedDeveloper: "Dev9", history: [] },
      { clientName: "Harper", projectTitle: "Todo App", priority: "Low", followupDate: "2025-11-22", status: "New Lead", assignedDeveloper: "Dev9", history: [] }
    ]
  },
  {
    clusterCode: "BER-DE-15",
    clients: 2,
    overdueFollowups: 0,
    priority: "Medium",
    lastAssignedTo: "Dev10",
    leads: [
      { clientName: "Lucas", projectTitle: "News App", priority: "Medium", followupDate: "2025-11-18", status: "New Lead", assignedDeveloper: "Dev10", history: [] },
      { clientName: "Lily", projectTitle: "Fitness App", priority: "Low", followupDate: "2025-11-21", status: "In Process", assignedDeveloper: "Dev10", history: [] }
    ]
  }
];
