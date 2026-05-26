import { formatThousands } from '../../../utils/formatNumber'
import styles from './Modal.module.css'

function Modal({ open, setOpen, selectedCountry}) {
  return (
      <div onClick={() => setOpen(false)} className={styles.ctModal}>
          <div onClick={(e) => e.stopPropagation()} className={styles.ctInfo}>
            <div className={styles.ctHead}>
              <img src={selectedCountry.flag} alt={`${selectedCountry.country} flag`} />
              <p><strong>Country:</strong> {selectedCountry.country}</p>
              <p><strong>Population:</strong> {formatThousands(selectedCountry.population)}</p>
            </div>
            <div className={styles.ctBody}>
              <p><strong>Cases:</strong> {formatThousands(selectedCountry.cases)}</p>
              <p><strong>Deaths:</strong> {formatThousands(selectedCountry.deaths)}</p>
              <p><strong>Recovered:</strong> {formatThousands(selectedCountry.recovered)}</p>
              <p><strong>Active:</strong> {formatThousands(selectedCountry.active)}</p>
              <p><strong>Critical:</strong> {formatThousands(selectedCountry.critical)}</p>
              <button onClick={() => setOpen(false)} className={styles.modalButton}>Close</button>
            </div>
          </div>
      </div>
  )
}

export default Modal
