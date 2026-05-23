import styles from './Feature.module.css'

function Feature({ data }) {
  return (
    <div className={styles.ctFeature}>
        <img src={`src/assets/img/${data.icon}.png`} alt={`${data.icon} icon`} />
        <h5>{data.title}</h5>
        <p>{data.paragraph}</p>
    </div>
  )
}

export default Feature