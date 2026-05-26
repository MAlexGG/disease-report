import { useEffect, useState } from 'react'
import styles from './TopCountry.module.css'
import { formatNumber, formatThousands, getRecoveredPercentage } from '../../../utils/formatNumber';
import { useResponsive } from '../../../hooks/useResponsive'
import { apiService } from '../../../services/apiService';
import Loader from '../../loader/Loader';

function TopCountry() {

  const [countriesCovidData, setCountriesCovidData] = useState([]);
  const { isMobile } = useResponsive();
  const api = apiService();

  useEffect(() => {
    api.getByCountry().then(res => {
      setCountriesCovidData(res.data.slice(0, 10))
    })
  }, [])
  
  
  return (
    <section className={styles.TopCountry}>
      <h3>Top Countries by Cases</h3>
      <p>Filtered by 24-hour transmission rate.</p>
      { countriesCovidData ?
        <table className={styles.ctTable}>
        <thead>
          <tr>
            <th>COUNTRY</th>
            {
              isMobile ? null : <th>CASES</th>
            }
            <th>DEATHS</th>
            <th>RECOVERY RATE</th>
          </tr>
        </thead>
        <tbody>
          {
            countriesCovidData.map((e, index) => (
              <tr className={styles.ctRows} key={index}>
                {
                  isMobile ? <td>{e.country}</td> : 
                  <td><span className={styles.badge}>{e.countryInfo.iso3}</span> {e.country}</td>
                }
                {
                  isMobile ? null : <td>{formatThousands(e.cases, 0, 0)}</td>
                }
                <td>{formatNumber(e.deaths)}</td>
                <td><span className={styles.badge}>{getRecoveredPercentage(e.recovered, e.cases)}%</span></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      : <Loader/> 
      }
    </section>
  )
}

export default TopCountry