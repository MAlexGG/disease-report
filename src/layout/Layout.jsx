import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default Layout