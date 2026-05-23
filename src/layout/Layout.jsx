import Header from '../components/header/Header'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'

function Layout() {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout