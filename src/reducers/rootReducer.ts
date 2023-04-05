import { combineReducers } from 'redux-immutable'

import { PokemonReducer } from './Pokemons'
import { uiReducer } from './Ui'

const rootReducer = combineReducers({
    data: PokemonReducer,
    ui: uiReducer
})

export default rootReducer