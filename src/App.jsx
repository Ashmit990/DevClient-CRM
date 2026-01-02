import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout } from "./layouts/RootLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { DevelopersLayout } from "./layouts/DevelopersLayout";
import DeveloperProfileLayout from "./layouts/DeveloperProfileLayout";
import { EditDeveloper } from "./components/Developers/EditDeveloper";
import ClusterLayout from "./layouts/ClusterLayout";
import { ClusterProfileLayout } from "./layouts/ClusterProfileLayout";
import { LeadActionView } from "./components/Leads/LeadActionView";
import NotFoundPage from "./components/Errors/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <DashboardLayout /> },
      { path: "dashboard", element: <DashboardLayout /> },

      { path: "developers", element: <DevelopersLayout /> },
      { path: "developers/:developerId", element: <DeveloperProfileLayout /> },
      { path: "developers/:developerId/edit", element: <EditDeveloper /> },

      { path: "clusters", element: <ClusterLayout /> },
      { path: "clusters/:clusterId", element: <ClusterProfileLayout /> },
      { path: "clusters/:clusterId/:leadId", element: <LeadActionView /> },

      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
