import { combineReducers } from 'redux'
import { personsReducer, moviesReducer, vehiclesReducer, currentPageReducer } from './itemsReducer'

export const rootReducer = combineReducers({
    movies: moviesReducer,
    persons: personsReducer,
    vehicles: vehiclesReducer,
    currentPage: currentPageReducer
});
