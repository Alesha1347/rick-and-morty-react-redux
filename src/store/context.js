import { createContext, useReducer } from "react";
import {reducer} from './reducer'

export const RAMContext = createContext()

const initialState = {
    characters: [],
    loading: true,
    currentPage: 1,
    count: null
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

    return <RAMContext.Provider value={state}>
        {children}
    </RAMContext.Provider>
}