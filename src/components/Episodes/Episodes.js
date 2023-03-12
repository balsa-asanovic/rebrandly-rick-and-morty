import Episode from './Episode/Episode';
import './episodes.css';

const Episodes = ({ episodesList, charName, setEpisodes }) => {

    return (
        <div className="episodes-main">
            <button className="episodes-X" onClick={() => setEpisodes([])}>X</button>
            <div className="episodes-title">Episodes of {charName}</div>
            {episodesList.map((episode, index) => <Episode key={index} url={episode} />)}
        </div>
    )
};

export default Episodes;