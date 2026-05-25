import React from 'react'
import { createBrowserRouter } from 'react-router'
import Layout from '../layout/Layout';
import App from '../App';
import Dashboard from '../pages/dashboard/Dashboard';
import NotFound from '../pages/notFound/NotFound';

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
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ],
  },
]);

