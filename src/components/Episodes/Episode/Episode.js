import { useEffect, useState } from 'react';
import './episode.css';

const Episode = ({ url }) => {

    const [episodeData, setEpisodeData] = useState({});

    useEffect(() => {
        const getEpisodedata = () => {
            // console.log(url);
            fetch(url, { method: "GET"})
                .then(data => data.json())
                .then(data => {setEpisodeData(data)});
        };

        getEpisodedata();
    }, [url]);

    return (
        <div className="episode-main">
            {episodeData.episode} <br /> {episodeData.name}
        </div>
    )
};

export default Episode;