import React, { useEffect, useState } from 'react';
import './App.css';
import usePokemonSprite from './hooks/usePokemonSprite';

function App() { 

  useEffect(()=> {
    const generatePokemons = async () => {
      const { results } = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10').then(response => response.json());
     setPokemons(results);
    } 
    generatePokemons();
  }, [])
  
  const [pokemons, setPokemons] = useState([]);

  const [pokemonImage, setURL] = usePokemonSprite();

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      {pokemons.map(({name, url}, index) => (
      <li
        key={name}
        onClick={() => setURL(url)}>
        {name}
      </li>
      ))}
      <img src={pokemonImage}/>
    </div>
  );
}

export default App;
