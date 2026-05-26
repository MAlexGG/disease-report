import { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import { useResponsive } from '../../hooks/useResponsive'
import { apiService } from '../../services/apiService'
import GlobalData from "../../components/charts/globalData/GlobalData"
import TopCountry from '../../components/charts/topCountry/TopCountry'
import GlobalEvolution from '../../components/charts/globalEvolution/GlobalEvolution'
import WorldMap from '../../components/charts/worldMap/WorldMap'
import Legend from '../../components/charts/worldMap/Legend'

function Dashboard() {

  const { isDesktop } = useResponsive();
  const api = apiService();
  const [affectedCountries, setAffectedCountries] = useState(0);

  useEffect(() => {
    api.getAll().then(res => {
      setAffectedCountries(res.data.affectedCountries)
    }).catch(error => console.log(error))
  }, [])
  
  return (
    <>
      <div className={styles.ctDashboard}>
        <h2>Global Analytics Dashboard</h2>
        <p>Real-time epidemiological surveillance and data modeling.</p>
        {
          isDesktop &&
          <div className={styles.ctChartTotalCountries}>
            <h6>Affected Countries</h6>
            <p>{affectedCountries}</p>
          </div>
        }
      </div>
      <GlobalData/>
      <div className={styles.ctMap}>
        <div className={styles.ctText}>
          <h3>Global Infection Density</h3>
          <p>Heatmap visualization of confirmed active cases by region.</p>
        </div>
        <WorldMap/>
        <Legend/>
      </div>
      <div className={styles.ctCharts}>
        <TopCountry/>
        <GlobalEvolution/>
      </div>
    </>
    
  )
}

export default Dashboard