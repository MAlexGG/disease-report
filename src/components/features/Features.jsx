import styles from './Features.module.css'
import { features } from '../../assets/data/features'
import Feature from './Feature'

function Features() {



  return (
    <div className={styles.ctFeatures}>
        <section className={styles.ctText}>
            <h2>Precision in Analytics</h2>
            <p>Leveraging advanced data harvesting techniques to provide the most reliable epidemiological insights available today.</p>
        </section>
        <section className={styles.ctCards}>
            {
                features.map((e, index) => (
                    <Feature key={index} data={e}/>
                ))
            }
        </section>
    </div>
  )
}

export default Features