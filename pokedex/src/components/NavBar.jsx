import { useState } from "react";
import PokemonCard from "./PokemonCard";

function NavBar({ pokemonIndex, setPokemonIndex, pokeLength }) {

    function handleClickNext() {
        if (pokemonIndex < pokeLength-1) { setPokemonIndex(pokemonIndex + 1) };
    }
    function handleClickPrevious() {
        if ( pokemonIndex > 0) { setPokemonIndex(pokemonIndex - 1) };
    }
    return (
        <div>
            <button onClick={handleClickPrevious}>Previous</button>
            <button onClick={handleClickNext}>Next</button>
        </div>
    )
}


export default NavBar;