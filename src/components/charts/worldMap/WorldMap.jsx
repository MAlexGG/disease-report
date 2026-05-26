import { useEffect, useState } from 'react'
import styles from './WorldMap.module.css'
import { ComposableMap, Geographies, Geography, Graticule, ZoomableGroup } from 'react-simple-maps'
import map from '../../../assets/data/mapData.json'
import mock from '../../../assets/data/mockCountriesMap.json'
import Modal from './Modal'

function WorldMap() {

    const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
    const [countriesCovidMapData, setCountriesCovidMapData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        mock.map(c => {
            setCountriesCovidMapData((prevItems) => [...prevItems, {
                iso3: c.countryInfo.iso3,
                cases: c.cases,
                country: c.country
            }])
        })
    }, []);
    
    function handleZoomIn() {
        if (position.zoom >= 4) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
    }

    function handleZoomOut() {
        if (position.zoom <= 1) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom / 4 }));
    }

    function handleMoveEnd(position) {
        setPosition(position);
    }

    function getColor(value) {
        if (value > 500000) return "#800026";
        if (value > 100000) return "#BD0026";
        if (value > 50000) return "#E31A1C";
        if (value > 10000) return "#FC4E2A";
        if (value > 1000) return "#FD8D3C";
        return "#bbbbbb";
    }

    const compareCountryData = (iso) => {
        return countriesCovidMapData.find(
            (c) => c.iso3 === iso
        );
    };

    function handleCountryClick(geo) {
        const country = compareCountryData(geo.id);
        setSelectedCountry(country || null);
        setOpen(true);
    }

  return (
    <>
        <ComposableMap projectionConfig={{ scale: 200 }} className={styles.ctWorld}>
            <ZoomableGroup
                zoom={position.zoom}
                center={position.coordinates}
                onMoveEnd={handleMoveEnd}   
                minZoom={1}
            >
                <Graticule stroke='#f4bfbf'/>
                <Geographies geography={map}>
                    {
                        ({ geographies }) => geographies.map((geo) => {
                            
                            const iso = geo.id;
                            const countryData = compareCountryData(iso);
                            const value = countryData?.cases || 0;

                            return (
                            <Geography 
                                key={geo.rsmKey} 
                                geography={geo} 
                                onClick={() => handleCountryClick(geo)}
                                style={{
                                    default: {
                                    fill: getColor(value),
                                    },
                                    hover: {
                                    fill: "#1976D2",
                                    },
                                    pressed: {
                                    fill: "#1976D2",
                                    },
                                }}
                            />
                        )})
                    }
                </Geographies>
            </ZoomableGroup>
        </ComposableMap>
        <button onClick={handleZoomIn}>+</button>
        <button onClick={handleZoomOut}>-</button>
        {
            open && selectedCountry && (
                <Modal open={open} setOpen={setOpen} selectedCountry={selectedCountry}/>
            )
        }
    </>
  )
}

export default WorldMap