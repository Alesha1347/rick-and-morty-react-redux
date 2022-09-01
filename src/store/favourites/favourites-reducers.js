import {
    ADD_FAVOURITES, 
    REMOVE_FAVOURITES,
    CLOSE_ALERT
} from './favourites-actions'

const initialState = {
    favourites: [],
    alertName: ''
}

export const favouritesReducer = (state = initialState, {type, payload}) => {
    // console.log(state.favourites)
    switch(type){
        case REMOVE_FAVOURITES:{
            return{
                ...state,
                favourites: state.favourites.filter(item => item.id !== payload)
            }
    }    case ADD_FAVOURITES:{
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
    } case CLOSE_ALERT:{
        return{
            ...state,
            alertName: ''
        }
    } default:{
        return{
            ...state
        }
    }
}
}
