import { useEffect, useState } from 'react'
import styles from './WorldMap.module.css'
import { ComposableMap, Geographies, Geography, Graticule, ZoomableGroup } from 'react-simple-maps'
import { scaleLinear } from "d3-scale"
import map from '../../../assets/data/mapData.json'
import mock from '../../../assets/data/mockCountriesMap.json'
import Modal from './Modal'
import RoundButton from '../../button/RoundButton'
import Loader from '../../loader/Loader'
import { apiService } from '../../../services/apiService'

function WorldMap() {

    const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
    const [countriesCovidMapData, setCountriesCovidMapData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [open, setOpen] = useState(false);
    const api = apiService();

    useEffect(() => {
        api.getCountriesData().then(res => {
            res.data.map(c => {
                setCountriesCovidMapData((prevItems) => [...prevItems, {
                    flag: c.countryInfo.flag,
                    iso3: c.countryInfo.iso3,
                    country: c.country,
                    population: c.population,
                    cases: c.cases,
                    deaths: c.deaths,
                    recovered: c.recovered,
                    active: c.active,
                    critical: c.critical
                }])
            })
        }).catch(error => console.log(error))
    }, []);
    
    const handleZoomIn = () => {
        if (position.zoom >= 4) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
    };

    const handleZoomOut = () => {
        if (position.zoom <= 1) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom / 4 }));
    };

    const handleMoveEnd = (position) => {
        setPosition(position);
    };

    const compareCountryData = (iso) => {
        return countriesCovidMapData.find((c) => c.iso3 === iso);
    };

    function handleCountryClick(geo) {
        const country = compareCountryData(geo.id);
        setSelectedCountry(country || null);
        setOpen(true);
    }

    function getColor(value) {
        if (value > 10000000) return "#135394";
        if (value > 1000000) return "#1976D2";
        if (value > 500000) return "#559ADD";
        if (value > 100000) return "#7dbdf9";
        return "#C2E1F6";
    }

    function getPattern(value) {
        if (value > 10000000) return "url(#diagonalLines)";
        if (value > 1000000) return "url(#dots)";
        if (value > 500000) return "url(#grid)";
        if (value > 100000) return "url(#horizontal)";
        return null;
    }

  return (
    <section className={styles.ctWorld}>
        {   countriesCovidMapData ?
            <ComposableMap projectionConfig={{ scale: 200 }} className={styles.ctMap}>
            <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd} minZoom={1}>
                <defs>
                    <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="3" height="3" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="8" stroke="#E6F6FF" strokeWidth="1"/>
                    </pattern>
                    <pattern id="dots" patternUnits="userSpaceOnUse" width="4" height="4">
                        <circle cx="1" cy="1" r="0.5" fill="#E6F6FF"/>
                    </pattern>
                    <pattern id="grid" patternUnits="userSpaceOnUse" width="4" height="4">
                        <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#E6F6FF" strokeWidth="1" />
                    </pattern>
                    <pattern id="horizontal" patternUnits="userSpaceOnUse" width="4" height="4">
                        <line x1="0" y1="4"  x2="8" y2="4" stroke="#E6F6FF" strokeWidth="1.5"/>
                    </pattern>
                </defs>
                <Graticule stroke='#f4bfbf'/>
                <Geographies geography={map}>
                    {
                        ({ geographies }) => geographies.map((geo) => {
                            const iso = geo.id;
                            const countryData = compareCountryData(iso);
                            const value = countryData?.cases || 0;
                            return (
                            <g key={geo.rsmKey}>
                                <Geography
                                    geography={geo}
                                    onClick={() => handleCountryClick(geo)}
                                    stroke='#1976D2'
                                    strokeWidth={0.5}
                                    style={{
                                        default: {
                                            fill: getColor(value),
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: "#ff8000",
                                            outline: "none",
                                            cursor: "pointer",
                                        },
                                        pressed: {
                                            fill: "#ff8000",
                                            outline: "none",
                                        },
                                    }}
                                />
                                {getPattern(value) && (
                                    <Geography
                                        geography={geo}
                                        style={{
                                            default: {
                                                fill: getPattern(value),
                                                outline: "none",
                                                pointerEvents: "none",
                                            },
                                            hover: {
                                                fill: "#ff8000",
                                                outline: "none",
                                                cursor: "pointer",
                                            },
                                            pressed: {
                                                fill: "#ff8000",
                                                outline: "none",
                                            },
                                        }}
                                    />
                                )}
                            </g>
                        )})
                    }
                </Geographies>
            </ZoomableGroup>
        </ComposableMap> 
        : <Loader/>
        }
        <div className={styles.ctButtons}>
            <RoundButton handleClick={handleZoomOut}>-</RoundButton>
            <RoundButton handleClick={handleZoomIn}>+</RoundButton>
        </div>
        {
            open && selectedCountry && (
                <Modal open={open} setOpen={setOpen} selectedCountry={selectedCountry}/>
            )
        }
    </section>
  )
}

export default WorldMap