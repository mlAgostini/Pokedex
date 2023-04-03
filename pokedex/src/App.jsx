
import './App.css'
import NavBar from './components/NavBar';
import PokemonCard from './components/PokemonCard';
import { useState } from 'react';

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);


  const pokemon = pokemonList[pokemonIndex]

  return (
    <div>
      <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokeLength={pokemonList.length}/>
      <PokemonCard
        pokemon={pokemon}
      />
      <div>

      </div>
    </div>

  );
}





const pokemonList = [

  {

    name: "bulbasaur",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

  },

  {

    name: "charmander",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",

  },

  {

    name: "squirtle",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",

  },

  {

    name: "pikachu",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",

  },

  {

    name: "mew",

  },

];

export default App;
