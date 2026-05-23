import React from 'react'
import { createBrowserRouter } from 'react-router'
import Dashboard from '../pages/Dashboard'
import App from '../App'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    }
])

