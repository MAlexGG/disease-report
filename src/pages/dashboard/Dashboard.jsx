import styles from './Dashboard.module.css'
import GlobalData from "../../components/charts/globalData/GlobalData"
import { useResponsive } from '../../hooks/useResponsive'
import TopCountry from '../../components/charts/topCountry/TopCountry';

function Dashboard() {

  const { isDesktop } = useResponsive();


  return (
    <>
      <div className={styles.ctDashboard}>
        <h2>Global Analytics Dashboard</h2>
        <p>Real-time epidemiological surveillance and data modeling.</p>
        {
          isDesktop &&
          <div className={styles.ctChartTotalCountries}>
            <h6>Affected Countries</h6>
            <p>231</p>
          </div>
        }
      </div>
      <GlobalData/>
      <div className={styles.ctCharts}>
        <TopCountry/>
      </div>
      
    </>
    
  )
}

export default Dashboard