import { fromJS } from 'immutable';
import { SET_FAVORITE, SET_LOADING, SET_POKEMON } from "../actions/Types"


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
    loading: false,
    favorite:'Pikachu'
})


export const reducer=(state=initialState, action:any)=>{
    switch(action.type){
        case SET_POKEMON:
            // Modificar el estado con desestructuración
            // return{...state,pokemons:action.payload};
            //Modificando el stado com immutable
            return state.setIn(['pokemons'], fromJS(action.payload))
        case SET_LOADING:
            return state.setIn(['loading'], fromJS(action.payload))
        case SET_FAVORITE:
            return state.setIn(['favorite'], fromJS(action.payload))
        default:
            return state;
    }
};