import React from 'react'
import { createBrowserRouter } from 'react-router'
import Layout from '../layout/Layout';
import App from '../App';
import Dashboard from '../pages/dashboard/Dashboard';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      { 
        path: "dashboard", 
        element: <Dashboard />
      }
    ],
  },
]);

