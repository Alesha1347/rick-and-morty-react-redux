import {
    SET_CHARACTERS,
    SET_COUNT,
    CHANGE_CURRENT_PAGE,
    CHANGE_STATUS,
    SET_SEARCH,
    SET_LOADING,
    CLEAR_DETAILS,
    CLOSE_ALERT,
    SET_CHARACTER,
    ADD_FAVOURITES,
    REMOVE_FAVOURITES
} from './characters-actions'

const initialState = {
    characters: [],
    loading: true,
    currentPage: 1,
    count: null,
    status: '',
    searchValue: '',
    character: [],
    favourites: [],
    alertName: ''
}

export const charactersReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case SET_CHARACTERS:{
            return {
                ...state,
                characters: payload || [],
                loading: false
            }
        } case SET_COUNT:{
            return{
                ...state,
                count: payload
            }
        } case CHANGE_CURRENT_PAGE:{
            return{
                ...state,
                currentPage: payload.selected + 1,
                loading: true
            }
        } case CHANGE_STATUS:{
            return{
                ...state,
                status: payload,
                currentPage: 1,
                loading: true
            }
        } case SET_SEARCH:{
            return{
                ...state,
                searchValue: payload,
                currentPage: 1
            }
        } case SET_LOADING:{
            return{
                ...state,
                loading: true
            }
        } case SET_CHARACTER:{
            return{
                ...state,
                loading: false,
                character: payload
            }
        } case CLEAR_DETAILS:{
            return {
                ...state,
                character: []
            }
        }   case ADD_FAVOURITES:{
            const itemIndex = state.favourites.findIndex(orderItem => orderItem.id === payload.id)

            let newOrder = null
            if(itemIndex < 0){
                const newItem = {
                    ...payload
                }
            newOrder = [...state.favourites, newItem]
            } else {
                newOrder = state.favourites.map((orderItem, index) =>{
                    if(index === itemIndex){
                        return {
                            ...orderItem
                        }
                    } else {
                        return orderItem
                    }
                })
            }
            return {
                ...state,
                favourites: newOrder,
                alertName: payload.name
            }
        } case REMOVE_FAVOURITES:{
            return{
                ...state,
                favourites: state.favourites.filter(item => item.id !== payload)
            }
        } case CLOSE_ALERT:{
            return{
                ...state,
                alertName: ''
            }
        } default:{
            return state
        }
    }
}