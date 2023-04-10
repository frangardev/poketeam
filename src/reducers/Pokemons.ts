import { fromJS } from 'immutable';
import { SET_FAVORITE, SET_POKEMON, SET_TEAM } from "../actions/Types"


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
    favorite:'Pikachu',
    team: []
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
        case SET_TEAM:
            const myTeam = state.get('team').toJS()
            const isNotNewTeam = myTeam.some(item => item[0].name === action.payload[0].name)

            if(!isNotNewTeam || myTeam.length === 0) {
              myTeam.push(action.payload)
              if(myTeam.length > 6)  myTeam.shift()
            }else{
                const value = myTeam.findIndex(item =>item[0].name === action.payload[0].name)
                myTeam.splice(value, 1)
            } 

            return state.setIn(['team'], fromJS(myTeam))
            break
        default:
            return state;
            break
    }
};

