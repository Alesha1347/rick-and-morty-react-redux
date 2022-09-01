export const ADD_FAVOURITES = 'ADD_FAVOURITES'
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES'
export const CLOSE_ALERT = 'CLOSE_ALERT'


export const addFavourites = character => ({
    type: ADD_FAVOURITES,
    payload: character
})

export const removeFavourites = id => ({
    type: REMOVE_FAVOURITES,
    payload: id
})

export const closeAlert = () => ({
    type: CLOSE_ALERT
})