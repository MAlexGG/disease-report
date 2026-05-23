import styles from './Hero.module.css'
import Button from '../button/Button'
import global from '../../assets/img/global_data_visualization.png'

function Hero() {
  return (
    <>
    <section className={styles.ctHero}>
        <h1>Global Disease Analytics</h1>
        <p>Comprehensive epidemiological intelligence sourced directly from disease.sh. Harness real-time pandemic tracking, historical trends, and predictive modeling for public health decision-makers.</p>
        <div className={styles.ctButtons}>
            <Button fill>Get Started</Button>
            <Button>View Demo</Button>
        </div>
    </section>
    <section className={styles.ctImage}>
        <img src={global} alt="globe over data analysis charts" />
    </section>
    </>
  )
}

export default Hero