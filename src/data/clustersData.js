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
        history: [
          {
            date: "2025-11-01",
            actor: "Dev1",
            comment: "Explained project scope",
            status: "NFD"
          }
        ]
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
        history: [
          {
            date: "2025-11-02",
            actor: "Dev2",
            comment: "Sent requirements document",
            status: "NFD"
          }
        ]
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
        history: [
          {
            date: "2025-10-30",
            actor: "Dev3",
            comment: "Discussed CRM flow",
            status: "NFD"
          }
        ]
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
  }
];
