import { Button } from '@mui/material'
import styles from './NotFound.module.css'
import { Link } from 'react-router'

function NotFound() {
  return (
    <div className={styles.ctNotFound}>
        <h2>404</h2>
        <h3>Page Not Found</h3>
        <p>The page you are trying to access does not exist.</p>
        <Link to={"/"} className={styles.link}>Return to homepage</Link>
    </div>
  )
}

export default NotFound