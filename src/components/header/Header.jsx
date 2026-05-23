import styles from './Header.module.css'
import { Link, NavLink } from 'react-router'
import logo from '../../assets/img/logo.jpg'

function Header() {
  return (
    <header className={styles.ctHeader}>
        <img src={logo} alt="logo" className={styles.imgLogo}/>
        <nav className={styles.ctNav}>
            <NavLink to={"/"} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link }>Home</NavLink>
            <NavLink to={"/dashboard"} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link }>Dashboard</NavLink>
        </nav>
    </header>
  )
}

export default Header