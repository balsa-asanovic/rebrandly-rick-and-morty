import './location.css'
import { useContext } from 'react';
import LocationContext from '../../context/LocationProvider';

const Location = ( {charName} ) => {
    const { location, setLocation } = useContext(LocationContext);

    return (
        <div className="location-main">
            <button className="location-X" onClick={() => setLocation(null)}>X</button>
            <div className="location-title">Location data of {charName}:</div>
            <br />
            <div className="location-data">
                Name: {location.name}
                <br />
                Type: {location.type}
                <br />
                Dimension: {location.dimension}
                <br />
                Number of residents: {location.residents.length}
            </div>
        </div>
    )
};

export default Location;