import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClusterLayout from "./layouts/ClusterLayout";
import NotFoundPage from "./components/Errors/NotFoundPage";
import { RootLayout } from "./layouts/RootLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { DevelopersLayout } from "./layouts/DevelopersLayout";
import DeveloperProfileLayout from "./layouts/DeveloperProfileLayout";
import { ClusterProfileLayout } from "./layouts/ClusterProfileLayout";
import { LeadActionView } from "./components/Leads/LeadActionView";

const App = () => {
 const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <DashboardLayout /> },
      { path: "dashboard", element: <LeadActionView /> },
      { path: "clusters", element: <ClusterLayout /> },
      { path: "developers", element: <DevelopersLayout /> },
      { path: "developers/:id", element: <DeveloperProfileLayout /> },
      { path: "clusters/:clusterId", element: <ClusterProfileLayout /> }, // Cluster page
      { path: "clusters/:clusterId/:leadId", element: <LeadActionView /> }, // Lead page
      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);


  return <RouterProvider router={router} />;
};

export default App;
