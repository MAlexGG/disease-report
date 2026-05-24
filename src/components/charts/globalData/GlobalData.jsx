import { useEffect, useState } from 'react'
import styles from './GlobalData.module.css'
import GlobalDataCard from './GlobalDataCard';
import { apiService } from '../../../services/apiService';



function GlobalData() {

    const [allData, setAllData] = useState([]);
    const api = apiService();

    useEffect(() => {
        api.getAll().then(res => {
            setAllData([
                {
                    icon: "totalCases", 
                    name: "TOTAL CASES",
                    data: res.data.cases
                },
                {
                    icon: "deaths",
                    name: "DEATHS",
                    data: res.data.deaths
                },
                {
                    icon: "recovered",
                    name: "RECOVERED",
                    data: res.data.recovered
                },
                {
                    icon: "active",
                    name: "ACTIVE",
                    data: res.data.active
                },
                {
                    icon: "critical",
                    name: "CRITICAL",
                    data: res.data.critical
                }
            ])
        })
    }, [])
    
  return (
    <section className={styles.ctCards}>
        {
            allData.map((e, index) => (
                <GlobalDataCard data={e} key={index}/>
            ))
        }
    </section>
  )
}

export default GlobalData