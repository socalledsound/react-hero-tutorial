import { createStore, combineReducers } from 'redux'
import gameReducer from './gameReducer'

const rootReducer = combineReducers({
    //state.game
    game: gameReducer,
    //state.marshmallow
    // marshmallow: marshmallowReducer,
})

export const store = createStore(rootReducer)