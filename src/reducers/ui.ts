import { fromJS } from 'immutable';
import {  SET_LOADING } from "../actions/Types"


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
    loading: false,
})


export const uiReducer=(state=initialState, action:any)=>{
    switch(action.type){
        case SET_LOADING:
            return state.setIn(['loading'], fromJS(action.payload))
        default:
            return state;
    }
};