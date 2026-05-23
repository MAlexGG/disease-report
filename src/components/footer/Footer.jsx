import styles from './Footer.module.css'
import logo from '../../assets/img/logo.png'
import { footerResources } from '../../assets/data/footerResources'
import { useResponsive } from '../../hooks/useResponsive'


function Footer() {

  const { isDesktop } = useResponsive();

  return (
    <footer className={styles.ctFooter}>
      <section className={styles.ctSectionCopyright}>
        <img src={logo} alt="logo" />
        <p>Providing the infrastructure for modern epidemiological research. Empowering global health experts with accessible, accurate, and rapid data visualization tools.</p>
        <p>© 2026 Global Disease Analytics. All rights reserved.</p>
      </section>
      {
        isDesktop &&
        <section className={styles.ctSectionResources}>
          {
            footerResources.map((e, index) => (
            <div className={styles.ctResource} key={index}>
              <h6>{e.title}</h6>
              <a href={e.hrefOne}>{e.subtitleOne}</a>
              <a href={e.hrefTwo}>{e.subtitleTwo}</a>
              <a href={e.hrefThree}>{e.subtitleThree}</a>
            </div>
            ))
          }
        </section>
      }
    </footer>
  )
}

export default Footer