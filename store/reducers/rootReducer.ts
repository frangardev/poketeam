import { combineReducers } from 'redux-immutable'

import { PokemonReducer } from './Pokemons'
import { uiReducer } from './Ui'

export default combineReducers({
    data: PokemonReducer,
    ui: uiReducer
})
