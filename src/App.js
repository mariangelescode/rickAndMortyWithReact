import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './components/Character';

function App() {

  const [characters, setCharacters] = useState(null);


  const reqApi = async() => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    
    setCharacters(characterApi.results);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        
        {
          characters ? 
            <Character characters={ characters } setCharacters={ setCharacters }/>
          :
            <>
              <img src="./img/rick-morty.png" alt="RickAndMorty" className="img-home" />
              <button onClick={ reqApi } className="btn-search">Buscar Personajes</button>
            </>
        }
        
      </header>
    </div>
  );
}

export default App;
