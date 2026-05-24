import { useEffect, useState } from 'react'
import styles from './TopCountry.module.css'
import { formatNumber, formatThousands, getRecoveredPercentage } from '../../../utils/formatNumber';
import { useResponsive } from '../../../hooks/useResponsive'

function TopCountry() {

  const [countriesData, setCountriesData] = useState([]);
  const { isMobile } = useResponsive();

  useEffect(() => {
    setCountriesData([
       {
        "updated": 1779622662874,
        "country": "USA",
        "countryInfo": {
          "_id": 840,
          "iso2": "US",
          "iso3": "USA",
          "lat": 38,
          "long": -97,
          "flag": "https://disease.sh/assets/img/flags/us.png"
        },
        "cases": 111820082,
        "todayCases": 0,
        "deaths": 1219487,
        "todayDeaths": 0,
        "recovered": 109814428,
        "todayRecovered": 0,
        "active": 786167,
        "critical": 940,
        "casesPerOneMillion": 333985,
        "deathsPerOneMillion": 3642,
        "tests": 1186851502,
        "testsPerOneMillion": 3544901,
        "population": 334805269,
        "continent": "North America",
        "oneCasePerPeople": 3,
        "oneDeathPerPeople": 275,
        "oneTestPerPeople": 0,
        "activePerOneMillion": 2348.13,
        "recoveredPerOneMillion": 327994.92,
        "criticalPerOneMillion": 2.81
      },
      {
        "updated": 1779622662876,
        "country": "India",
        "countryInfo": {
          "_id": 356,
          "iso2": "IN",
          "iso3": "IND",
          "lat": 20,
          "long": 77,
          "flag": "https://disease.sh/assets/img/flags/in.png"
        },
        "cases": 45035393,
        "todayCases": 0,
        "deaths": 533570,
        "todayDeaths": 0,
        "recovered": 0,
        "todayRecovered": 0,
        "active": 44501823,
        "critical": 0,
        "casesPerOneMillion": 32016,
        "deathsPerOneMillion": 379,
        "tests": 935879495,
        "testsPerOneMillion": 665334,
        "population": 1406631776,
        "continent": "Asia",
        "oneCasePerPeople": 31,
        "oneDeathPerPeople": 2636,
        "oneTestPerPeople": 2,
        "activePerOneMillion": 31637.15,
        "recoveredPerOneMillion": 0,
        "criticalPerOneMillion": 0
      }
    ])
  }, [])
  
  
  return (
    <section className={styles.TopCountry}>
      <h3>Top Countries by Cases</h3>
      <p>Filtered by 24-hour transmission rate.</p>
      <table className={styles.ctTable}>
        <thead>
          <tr>
            <th>COUNTRY</th>
            {
              !isMobile && <th>CASES</th>
            }
            <th>DEATHS</th>
            <th>RECOVERY RATE</th>
          </tr>
        </thead>
        <tbody>
          {
            countriesData.map((e, index) => (
              <tr className={styles.ctRows}>
                <td><span className={styles.badge}>{e.countryInfo.iso3}</span> {e.country}</td>
                {
                  !isMobile && <td>{formatThousands(e.cases)}</td>
                }
                <td>{formatNumber(e.deaths)}</td>
                <span className={styles.ctBadge}>
                  <td className={styles.badge}>{getRecoveredPercentage(e.recovered, e.cases)}%</td>
                </span>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  )
}

export default TopCountry