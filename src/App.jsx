import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClusterLayout from "./layouts/ClusterLayout";
import NotFoundPage from "./components/Errors/NotFoundPage";
import React from "react";
import { RootLayout } from "./layouts/RootLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { DevelopersLayout } from "./layouts/DevelopersLayout";

import { DeveloperProfile } from "./layouts/DeveloperProfileLayout";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <DashboardLayout /> },
        { path: "dashboard", element: <DashboardLayout /> },
        { path: "clusters", element: <ClusterLayout /> },

        // 👇 Developers list
        { path: "developers", element: <DevelopersLayout /> },

        // 👇 Dynamic developer profile
        { path: "developers/:id", element: <DeveloperProfile /> },

        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
