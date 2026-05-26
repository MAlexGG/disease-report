import styles from './RoundButton.module.css'

function RoundButton({ handleClick, children }) {
  return (
    <button onClick={handleClick} className={styles.btRound}>{children}</button>
  )
}

export default RoundButton