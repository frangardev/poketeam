// rxslice -> vscode create template
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getPokemonDetails, getPokemons, getTypes } from '../../src/utils/api';
import { setLoading, setLoadingTypes } from './uiSlice';

export interface CounterState {
    pokemons: any,
    typesPokemon: any,
    team: any
}

const initialState: CounterState = {
    pokemons: [],
    typesPokemon: [],
    team: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonsRes = await getPokemons();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.results.map((pokemon:any) => getPokemonDetails(pokemon.url))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);
export const fetchTypesWithDetails = createAsyncThunk(
  'data/fetchTypesWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoadingTypes(true));
    const typesRes = await getTypes();
    const typesDetailed = await Promise.all(
      typesRes.results.map((type:any) => getPokemonDetails(type.url))
    );
    dispatch(setTypes(typesDetailed));
    dispatch(setLoadingTypes(true));
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<any>) => {
        state.pokemons = action.payload
      },
    setTypes: (state, action: PayloadAction<any>) => {
        state.typesPokemon = action.payload
      },
    setTeam: (state, action: PayloadAction<any>) => {
        const myTeam = state.team
        const isNotNewTeam = myTeam.some(item => item[0].name === action.payload[0].name)

        if(!isNotNewTeam || myTeam.length === 0) {
          myTeam.push(action.payload)
        if(myTeam.length > 6)  myTeam.shift()
        }else{
            const value = myTeam.findIndex(item =>item[0].name === action.payload[0].name)
            myTeam.splice(value, 1)
        } 

        state.team = myTeam
    },
  },
});

export const { setTeam, setPokemons, setTypes } = dataSlice.actions;
console.log('🚀 ~ file: dataSlice.js ~ line 29 ~ dataSlice', dataSlice);

export default dataSlice.reducer;