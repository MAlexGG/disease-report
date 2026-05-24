import styles from './Dashboard.module.css'
import GlobalData from "../../components/charts/globalData/GlobalData"

function Dashboard() {
  return (
    <>
      <div className={styles.ctDashboard}>
        <h2>Global Analytics Dashboard</h2>
        <p>Real-time epidemiological surveillance and data modeling.</p>
      </div>
      <GlobalData/>
    </>
    
  )
}

export default Dashboard