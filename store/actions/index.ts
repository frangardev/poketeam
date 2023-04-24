import { getPokemonDetails, getTypesDetails } from "../../src/utils/api";
import { SET_FAVORITE, SET_LOADING, SET_POKEMON, SET_TEAM, SET_TYPES } from "./types";

// // import { IPokemonDetails, IPokemonType } from "../types";
// import { Dispatch } from "redux";
// import { useDispatch, useSelector } from "react-redux";

// export const setPokemons = (payload) => ({
//   type: SET_POKEMON,
//   payload
// })

// export const setLoading = (payload) => ({
//   type: SET_LOADING,
//   payload,
// });
// export const setFavorite = (payload) => ({
//   type: SET_FAVORITE,
//   payload,
// });

// // export const getPokemonsWithDetails =
// //   (pokemons: []) =>
// //     // Dispatch se debe tipar para que no ocurran inconvenientes con lo que devuelve 
// //     async (dispatch: Dispatch<any>) => {
// //       // dispatch(setLoading(true))
// //       const pokemonDetails = await Promise.all(
// //         pokemons.map((pokemon) => pokemon && getPokemonDetails(pokemon.url))
// //       );
// //       dispatch(setPokemons(pokemonDetails))
// //       // dispatch(setLoading(false))
//     };
// export const getPokemonsWithDetails =
//   (pokemons = []) =>
//     async (dispatch) => {
//       const pokemonsDetailed = await Promise.all(
//         pokemons.map((pokemon) => getPokemonDetails(pokemon.url))
//       );

//       dispatch(setPokemons(pokemonsDetailed));
//     };


// import { getPokemonDetails } from '../api';
// import { SET_LOADING,  } from './types';

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setPokemons = (payload) => ({
  type: SET_POKEMON,
  payload,
});
export const setTypes = (payload) => ({
  type: SET_TYPES,
  payload,
});
export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});
export const setTeam = (payload) => ({
  type: SET_TEAM,
  payload,
});

export const getPokemonsWithDetails =
  (pokemons = []) =>
    async (dispatch) => {
      const pokemonsDetailed = await Promise.all(
        pokemons.map((pokemon) => getPokemonDetails(pokemon.url))
      );

      dispatch(setPokemons(pokemonsDetailed));
    };
export const getTypesWithDetails =
  (types = []) =>
    async (dispatch) => {
      const typesDetailed = await Promise.all(
        types.map((type) => getPokemonDetails(type.url))
      );
      dispatch(setTypes(typesDetailed));
    };