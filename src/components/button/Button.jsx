import styles from './Button.module.css'


function Button({children, handleClick, fill}) {


  return (
    <button onClick={handleClick} className={`${styles.btMain} ${fill ? styles.btFill : styles.btOutline}`}>{children}</button>
  )
}

export default Button