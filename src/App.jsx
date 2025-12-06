import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClusterLayout from "./layouts/ClusterLayout";
import React from 'react'
import { RootLayout } from "./layouts/RootLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";

 const App = () => {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootLayout/>,
        children: [
          {index: true, element: <DashboardLayout/>},
          {path: 'clusters', element: <ClusterLayout/>}
        ]
      }
    ]
  )

   return <RouterProvider router={router} />;

}

export default App

