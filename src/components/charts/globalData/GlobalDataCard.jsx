import { formatNumber, formatThousands } from '../../../utils/formatNumber'
import styles from './GlobalDataCard.module.css'
import { useResponsive } from '../../../hooks/useResponsive'

function GlobalDataCard({ data }) {

    const { isMobile } = useResponsive();

  return (
    <div className={styles.ctCard}>
        <img src={`src/assets/icons/${data.icon}.png`} alt={`${data.icon} icon`} />
        <h6>{data.name}</h6>
        {
            isMobile ?
            <p>{formatThousands(data.data)}</p> :
            <p>{formatNumber(data.data)}</p>    
        }
    </div>
  )
}

export default GlobalDataCard