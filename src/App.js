import './App.css';
import { useEffect, useState, useContext } from "react";
import Character from './components/Character/Character';
import Episodes from './components/Episodes/Episodes';
import Origin from './components/Origin/Origin';
import PageBar from './components/PageBar/PageBar';
import PageContext from './context/PageProvider';
import Location from './components/Location/Location';
import LocationContext from './context/LocationProvider';

const App = () => {
  const { page, setNumOfPages } = useContext(PageContext)
  const { location } = useContext(LocationContext);
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [charEpisodes, setCharEpisodes] = useState("");
  const [charLocation, setCharLocation] = useState("");
  const [origin, setOrigin] = useState("");
  const [charOrigin, setCharOrigin] = useState("");

  useEffect(() => {
    const getData = () => {
      fetch("https://rickandmortyapi.com/api/character/?page=" + page, { method: "GET"})
        .then(data => data.json())
        .then(data => {setNumOfPages(data.info.pages); setCharacters(data.results)});
    };

    getData();
  }, [page]);



  return (
    <div className="app-main">
      <PageBar />
      {episodes.length !== 0 ? <Episodes episodesList={episodes} charName={charEpisodes} setEpisodes={setEpisodes} /> : "" }
      {origin !== "" ? <Origin url={origin} setOrigin={setOrigin} charName={charOrigin} /> : ""}
      {location ?  <Location charName={charLocation} /> : ""}
      {characters.map((character, index) => 
                        <Character key={index} 
                                   charData={character} 
                                   setEpisodes={setEpisodes} 
                                   setCharEpisodes={setCharEpisodes} 
                                   setOrigin={setOrigin} 
                                   setCharOrigin={setCharOrigin} 
                                   setCharLocation={setCharLocation}/>
                     )
      }
      <PageBar />
    </div>
  );
}

export default App;
