import { useEffect, useState, useContext } from 'react';
import './character.css';
import LocationContext from '../../context/LocationProvider';

const Character = ({ charData, setEpisodes, setCharEpisodes, setOrigin, setCharOrigin, setCharLocation }) => {
    const [firstAppearance, setFirstAppearance] = useState({});
    const { location, setLocation } = useContext(LocationContext);

    const handleOriginClick = () => {
        setOrigin(charData.origin.url); 
        setCharOrigin(charData.name);
        setEpisodes([]);
        if(charData.origin.url === "")
            alert("No origin data for " + charData.name);
    };

    const getLocationData = () => {
        fetch(charData.location.url, { method: "GET"})
          .then(data => data.json())
          .then(data => {setLocation(data)});
      };

    useEffect(() => {
        const getFirstAppearance = () => {
            fetch(charData.episode[0], { method: "GET"})
              .then(data => data.json())
              .then(data => {setFirstAppearance(data)});
          };

        getFirstAppearance();
    }, [charData]);

    return (
        <div className="character-main">
            <img src={charData.image} width="250" alt={charData.name} />
            <div className="character-data">
                <span className="character-name">{charData.name}</span> <br />
                <span className="character-status">{charData.status}</span> - <span className="character-species">{charData.species}</span>
                <br /> <br />
                <span className="character-location-label">Last known location:</span>
                <br />
                <span className="character-location" onClick={() => { getLocationData(); setCharLocation(charData.name); }}>{charData.location.name}</span>
                <br /><br />
                <span className="character-first-appearance-label">Firs appearance:</span>
                <br />
                <span className="character-first-appearance">{firstAppearance.name}</span>
                <br /> <br />
                <button className="character-episodes" onClick={() => {setEpisodes(charData.episode); setCharEpisodes(charData.name); setOrigin(""); }}>Episodes data</button> 
                <button className="character-origin" onClick={handleOriginClick}>Origin data</button>
            </div>
        </div>
    )
};

export default Character;