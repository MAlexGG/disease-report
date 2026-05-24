import { useEffect, useState } from 'react'
import styles from './GlobalData.module.css'
import GlobalDataCard from './GlobalDataCard';



function GlobalData() {

    const [allData, setAllData] = useState([]);

    useEffect(() => {
      setAllData(
        [
            {
                icon: "totalCases", 
                name: "TOTAL CASES",
                data: 704753890
            },
            {
                icon: "deaths",
                name: "DEATHS",
                data: 7010681
            },
            {
                icon: "recovered",
                name: "RECOVERED",
                data: 675619811
            },
            {
                icon: "active",
                name: "ACTIVE",
                data: 22123398
            },
            {
                icon: "critical",
                name: "CRITICAL",
                data: 34794
            }
        ]
      )
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