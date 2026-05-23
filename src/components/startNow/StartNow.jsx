import styles from './StartNow.module.css'
import Button from '../button/Button'

const data = [
    {
        first: "99.9%",
        second: "UPTIME"
    },
    {
        first: "2M+",
        second: "REQUEST/DAY"
    },
    {
        first: "215",
        second: "COUNTRIES"
    },
    {
        first: "Real-Time",
        second: "ALERTING"
    }
]

function StartNow() {
  return (
    <section className={styles.ctStartNow}>
        <div className={styles.ctTextSection}>
            <h2>Start Analyzing Now</h2>
            <p>Join a global network of researchers and analysts using our suite to monitor, predict, and combat disease outbreaks. Our tools are free for researchers and non-profit organizations.</p>
            <div className={styles.ctButtons}>
                <Button fill>Launch Dashboard</Button>
                <Button>View Documentation</Button>
            </div>
        </div>
        <div className={styles.ctCardsSection}>
            {
                data.map((e, index) => (
                    <div className={styles.ctCard}>
                        <p>{e.first}</p>
                        <p>{e.second}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default StartNow