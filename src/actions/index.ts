import { getPokemonDetails } from "../utils/api";
import { SET_POKEMON } from "./types";

// import { IPokemonDetails, IPokemonType } from "../types";
import { Dispatch } from "redux";

export const setPokemons = (payload)=>({
    type: SET_POKEMON,
    payload
})


export const getPokemonsWithDetails =
  (pokemons: []) =>
    // Dispatch se debe tipar para que no ocurran inconvenientes con lo que devuelve 
    async (dispatch: Dispatch<any>) => {
      const pokemonDetails = await Promise.all(
        pokemons.map((pokemon) => pokemon && getPokemonDetails(pokemon.url))
      );
      dispatch(setPokemons(pokemonDetails));
  };
