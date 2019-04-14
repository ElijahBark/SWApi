import { combineReducers } from 'redux'
import { moviesReducer } from './movies'
import { personsReducer } from './persons'

export const rootReducer = combineReducers({
    movies: moviesReducer,
    persons: personsReducer,
})
