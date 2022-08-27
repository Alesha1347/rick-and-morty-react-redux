import { createContext, useReducer } from "react";
import {reducer} from './reducer'

export const RAMContext = createContext()

const initialState = {
    characters: [],
    loading: true,
    currentPage: 1,
    count: null,
    status: '',
    searchValue: '',
    character: []
}

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    state.setCharacters = (data) => {
        dispatch({
            type: 'SET_CHARACTERS',
            payload: data
        })
    }

    state.setCount = data => {
        dispatch({
            type: 'SET_COUNT',
            payload: data
        })
    }

    state.changePage = page => {
        dispatch({
            type: 'CHANGE_CURRENT_PAGE',
            payload: page
        })
    }

    state.changeStatus = status => {
        dispatch({
            type: 'CHANGE_STATUS',
            payload: status
        })
    }

    state.setSearch = value => {
        dispatch({
            type: 'SET_SEARCH',
            payload: value
        })
    }

    state.setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }

    // CharacterPage
    state.setCharacter = (data) => {
        dispatch({
            type: 'SET_CHARACTER',
            payload: data
        })
    }

    
    // clear page details
    state.clearDetails = () => {
        dispatch({
            type: 'CLEAR_DETAILS'
        })
    }

    return <RAMContext.Provider value={state}>
        {children}
    </RAMContext.Provider>
}