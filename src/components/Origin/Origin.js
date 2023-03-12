import { useEffect, useState } from 'react';
import './origin.css'

const Origin = ({ url, setOrigin, charName }) => {

    const [originData, setOriginData] = useState({});
    const [numOfResidents, setNumOfResidents] = useState(0);

    useEffect(() => {
        const getOriginData = () => {
            fetch(url, { method: "GET"})
                .then(data => data.json())
                .then(data => {setOriginData(data); setNumOfResidents(data.residents.length)});
        };

        getOriginData();
    }, [url]);

    return (
        <div className="origin-main">
            <button className="origin-X" onClick={() => setOrigin("")}>X</button>
            <div className="origin-title">Origin data of {charName}:</div>
            <br />
            <div className="origin-data">
                Name: {originData.name}
                <br />
                Type: {originData.type}
                <br />
                Dimension: {originData.dimension}
                <br />
                Number of residents: {numOfResidents}
            </div>
        </div>
    )
};

export default Origin;
