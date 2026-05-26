import styles from './Legend.module.css'

function Legend() {
  return (
    <div className={styles.ctLegend}>
        <h6>Cases</h6>
        <div className={styles.ctInfo}>
            <div className={styles.ctColors}>
                <div className={`${styles.ctColor} ${styles.c1}`}></div>
                <div className={`${styles.ctColor} ${styles.c2}`}></div>
                <div className={`${styles.ctColor} ${styles.c3}`}></div>
                <div className={`${styles.ctColor} ${styles.c4}`}> </div>
                <div className={`${styles.ctColor} ${styles.c5}`}></div>
            </div>
            <div className={styles.ctText}>
                <p>0</p>
                <p>100.000</p>
                <p>500.000</p>
                <p>1.000.000</p>
                <p>10.000.000</p>
            </div>
        </div>
    </div>
  )
}

export default Legend