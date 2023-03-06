import { SET_POKEMON } from "../actions/Types"


type TypeState = {
    pokemons: []
}

const initialState: TypeState = {
    pokemons: []
}

export const pokemonReducer = (state:TypeState = initialState, action:any)=>{
    switch(action.type){
        case SET_POKEMON:
            return {...state, pokemons: action.payload}

        default:
            return state
    }

}