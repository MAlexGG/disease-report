import styles from './Footer.module.css'
import logo from '../../assets/img/logo.png'


function Footer() {
  return (
    <footer className={styles.ctFooter}>
      <section className={styles.ctSectionCopyright}>
        <img src={logo} alt="logo" />
        <p>Providing the infrastructure for modern epidemiological research. Empowering global health experts with accessible, accurate, and rapid data visualization tools.</p>
        <p>© 2026 Global Disease Analytics. All rights reserved.</p>
      </section>
      <section className={styles.ctSectionResources}>
        <div className={styles.ctResource}>
          <h6>RESOURCES</h6>
          <a href="https://disease.sh/docs/">API Documentation</a>
          <a href="">Global Reports</a>
          <a href="">Methodology</a>
        </div>
        <div className={styles.ctResource}>
          <h6>LEGAL</h6>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
          <a href="">Data Ethics</a>
        </div>
        <div className={styles.ctResource}>
          <h6>SUPPORT</h6>
          <a href="">Contact Support</a>
          <a href="">Status Page</a>
          <a href="">Community Forum</a>
        </div>
      </section>
    </footer>
  )
}

export default Footer