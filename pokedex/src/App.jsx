import PropTypes from "prop-types";
import './App.css'
import PokemonCard from './components/PokemonCard';

function App() {

  const pokemon = pokemonList[0];
  return (
    <div>
      <PokemonCard
      name={pokemon.name}
      imgSrc={pokemon.imgSrc}
      />
    </div>
  );
}

PokemonCard.PropTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.node.isRequired,
  }).isRequired
}

const pokemonList = [
  {
      name: "Bulbasaur",
      imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
      name: "mew",
  },
];

export default App;
