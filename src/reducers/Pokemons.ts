import { fromJS } from 'immutable';
import { SET_FAVORITE, SET_POKEMON } from "../actions/Types"


type TypeState = {
    pokemons: [],
    loading: boolean,
    favorite: string,
}

// Declarando el state
// const initialState: TypeState = {
//     pokemons: [],
//     loading: false,
//     favorite:'Pikachu'
// }

// Delarando el stado con immutable
const initialState = fromJS({
    pokemons: [],
    favorite:'Pikachu'
})


export const PokemonReducer=(state=initialState, action:any)=>{ 
    switch(action.type){
        case SET_POKEMON:
            // Modificar el estado con desestructuración
            // return{...state,pokemons:action.payload};
            //Modificando el stado com immutable
            return state.setIn(['pokemons'], fromJS(action.payload))
            break
        case SET_FAVORITE:
            return state.setIn(['favorite'], fromJS(action.payload))
            break
        default:
            return state;
            break
    }
};