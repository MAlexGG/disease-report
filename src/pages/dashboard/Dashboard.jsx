import { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import { useResponsive } from '../../hooks/useResponsive'
import { apiService } from '../../services/apiService'
import GlobalData from "../../components/charts/globalData/GlobalData"
import TopCountry from '../../components/charts/topCountry/TopCountry'
import GlobalEvolution from '../../components/charts/globalEvolution/GlobalEvolution'
import WorldMap from '../../components/charts/worldMap/WorldMap'

function Dashboard() {

  const { isDesktop } = useResponsive();
  const api = apiService();
  const [countries, setCountries] = useState(0);

  useEffect(() => {
    api.getAll().then(res => {
      setCountries(res.data.affectedCountries)
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
            <p>{countries}</p>
          </div>
        }
      </div>
      <GlobalData/>
      <div className={styles.ctCharts}>
        <TopCountry/>
        <GlobalEvolution/>
      </div>
      <WorldMap/>
      
    </>
    
  )
}

export default Dashboard