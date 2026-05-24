import { useEffect, useState } from "react"
import styles from './GlobalEvolution.module.css'
import { LineChart } from "@mui/x-charts"
import { formatNumber } from "../../../utils/formatNumber";
import { apiService }from '../../../services/apiService'



function GlobalEvolution() {
  const [chartData, setChartData] = useState(null);
  const api = apiService();

  useEffect(() => {

    api.getHistorical().then(res => {
        const dates = Object.keys(res.data.cases);
        const cases = Object.values(res.data.cases);
        const deaths = Object.values(res.data.deaths);

        setChartData({ dates, cases, deaths })
    }).catch(error => {
        console.error("Error fetching historical data:", error);
    })
   
  }, []);


  return (
    <div className={styles.ctGlobalEvolution}>
        <h3>180-Day Timeline</h3>
        {
            !chartData ? <p>Loading chart...</p> : 
            <LineChart
                className={styles.ctChart}
                height={450}

                xAxis={[
                {
                    scaleType: "point",
                    data: chartData.dates,

                    tickLabelInterval: (_, index) =>
                    index % 90 === 0,
                },
                ]}

                yAxis={[
                {
                    valueFormatter: (value) =>
                    formatNumber(value),
                },
                ]}

                series={[
                {
                    data: chartData.cases,
                    label: "Cases",
                    curve: "monotoneX",
                    color: "#1976D2"
                },
                {
                    data: chartData.deaths,
                    label: "Deaths",
                    curve: "monotoneX",
                    color: "#BA1A1A"
                }
                ]}

                slotProps={{
                legend: {
                    direction: "row",
                    position: {
                    vertical: "top",
                    horizontal: "middle",
                    },
                },
                }}
            />
        }
      
    </div>
  );
}

export default GlobalEvolution