import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClusterLayout from "./layouts/ClusterLayout";
import NotFoundPage from "./components/Errors/NotFoundPage";
import React from 'react'
import { RootLayout } from "./layouts/RootLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { DevelopersLayout } from "./layouts/DevelopersLayout";


 const App = () => {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootLayout/>,
        children: [
          {index: true, element: <DashboardLayout/>},
          {path: 'clusters', element: <ClusterLayout/>},
          {path: 'dashboard', element: <DashboardLayout/>},
          {path: 'developers', element: <DevelopersLayout/>},
          { path: '*', element: <NotFoundPage /> },
        ]
      }
    ]
  )

   return <RouterProvider router={router} />;

}

export default App

