import './App.css';
import { useEffect, useState, useContext } from "react";
import Character from './components/Character/Character';
import Episodes from './components/Episodes/Episodes';
import Origin from './components/Origin/Origin';
import PageBar from './components/PageBar/PageBar';
import PageContext from './context/PageProvider';

const App = () => {
  const { page, setNumOfPages } = useContext(PageContext)
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [charEpisodes, setCharEpisodes] = useState("");
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
      {characters.map((character, index) => 
                        <Character key={index} 
                                   charData={character} 
                                   setEpisodes={setEpisodes} 
                                   setCharEpisodes={setCharEpisodes} 
                                   setOrigin={setOrigin} 
                                   setCharOrigin={setCharOrigin} />
                     )
      }
      <PageBar />
    </div>
  );
}

export default App;
