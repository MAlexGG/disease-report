import styles from './StartNow.module.css'
import Button from '../button/Button'
import { useResponsive } from '../../hooks/useResponsive'
import { useNavigate } from 'react-router';

const data = [
    {
        first: "99.9%",
        second: "UPTIME"
    },
    {
        first: "2M+",
        second: "REQUEST/DAY"
    },
    {
        first: "231",
        second: "COUNTRIES"
    },
    {
        first: "Real-Time",
        second: "ALERTING"
    }
]

function StartNow() {

    const { isMobile } = useResponsive();
    let navigate = useNavigate();

    const redirection = () =>  {
        navigate("/dashboard")
    }

    const openDocs = () => {
        window.open('https://disease.sh/docs/', '_blank', 'noopener,noreferrer');
    }


  return (
    <section className={styles.ctStartNow}>
        <div className={styles.ctTextSection}>
            <h2>Start Analyzing Now</h2>
            <p>Join a global network of researchers and analysts using our suite to monitor, predict, and combat disease outbreaks. Our tools are free for researchers and non-profit organizations.</p>
            <div className={styles.ctButtons}>
                <Button fill handleClick={redirection}>Launch Dashboard</Button>
                <Button handleClick={openDocs}>View Documentation</Button>
            </div>
        </div>
        {
            !isMobile &&
            <div className={styles.ctCardsSection}>
            {
                data.map((e, index) => (
                    <div className={styles.ctCard} key={index}>
                        <p>{e.first}</p>
                        <p>{e.second}</p>
                    </div>
                ))
            }
            </div>
        }
        
    </section>
  )
}

export default StartNow