import { SET_FAVORITE, SET_LOADING, SET_POKEMON } from "../actions/Types"


type TypeState = {
    pokemons: [],
    loading: boolean,
    favorite: string,
}

const initialState: TypeState = {
    pokemons: [],
    loading: false,
    favorite:'Pikachu'
}

// export const pokemonReducer = (state:TypeState = initialState, action:any)=>{
//     console.log('action: ', action);
//     console.log('state: ', state);
//     // debugger
//     switch(action.type){
//         case SET_POKEMON:
//             // console.log('pokemons: ' , state);
//             return {...state, pokemons: action.payload}
//         case SET_LOADING:
//             // console.log('state: ' , state);
//             // console.log('action.payload: ' , action.payload);
//             return {...state, loading: action.payload}
//         case SET_FAVORITE:
//             // console.log('state: ' , state);
//             console.log('New Favorite');
//             return {...state, favorite: action.payload}

//         default:
//             return state
//     }
// }


// import{SET_LOADING,SET_POKEMONS}from '../actions/types';
// const initialState={
//     pokemons:[],
//     loading:false,
// };
export const reducer=(state=initialState,action)=>{
    console.log('action: ', action.type);
    console.log('state: ', state);
    switch(action.type){
        case SET_POKEMON:
            return{...state,pokemons:action.payload};
            case SET_LOADING:
            console.log('SET_LOADING: ', action);
            return { ...state, loading: action.payload };
            case SET_FAVORITE:
            console.log('SET_FAVORITE: ', action);
            return{...state,favorite:action.payload};
        default:
            return state;
    }
};