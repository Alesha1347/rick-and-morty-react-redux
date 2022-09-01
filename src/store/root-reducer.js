import { combineReducers } from 'redux'
import {charactersReducer} from './characters/characters-reducers'
import {favouritesReducer} from './favourites/favourites-reducers'

export const rootReducer = combineReducers({
    characters: charactersReducer,
    favourites: favouritesReducer
})