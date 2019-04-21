import { combineReducers } from 'redux'
import { personsReducer, moviesReducer, vehiclesReducer } from './itemsReducer'

export const rootReducer = combineReducers({
    movies: moviesReducer,
    persons: personsReducer,
    vehicles: vehiclesReducer,
});
