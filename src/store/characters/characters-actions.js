export const SET_CHARACTERS = 'SET_CHARACTERS'
export const SET_COUNT = 'SET_COUNT'
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
export const CHANGE_STATUS = 'CHANGE_STATUS'
export const SET_SEARCH = 'SET_SEARCH'
export const SET_LOADING = 'SET_LOADING'
export const CLEAR_DETAILS = 'CLEAR_DETAILS'
export const CLOSE_ALERT = 'CLOSE_ALERT'

export const SET_CHARACTER = 'SET_CHARACTER'


export const ADD_FAVOURITES = 'ADD_FAVOURITES'
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES'


export const setCharacters = (data) => ({
    type: SET_CHARACTERS,
    payload: data
})

export const setCount = data => ({
    type: SET_COUNT,
    payload: data
})

export const changePage = page => ({
    type: CHANGE_CURRENT_PAGE,
    payload: page
})

export const changeStatus = status => ({
    type: CHANGE_STATUS,
    payload: status
})

export const setSearch = value => ({
    type: SET_SEARCH,
    payload: value
})

export const setLoading = () => ({
    type: SET_LOADING
})

export const clearDetails = () => ({
    type: CLEAR_DETAILS
})

export const closeAlert = () => ({
    type: CLOSE_ALERT
})


// character
export const setCharacter = data => ({
    type: SET_CHARACTER,
    payload: data
})

// fav
export const addFavourites = character => ({
    type: ADD_FAVOURITES,
    payload: character
})

export const removeFavourites = id => ({
    type: REMOVE_FAVOURITES,
    payload: id
})



export const loadCharacters = (queryParams) => (dispatch, _ /*здесь мог быть getState */, {client, api}) => {
    dispatch(setLoading())
    client.get(api + `character/?page=${queryParams.page}${queryParams.status ? `&status=${queryParams.status}` : ''}${queryParams.name ? `&name=${queryParams.name}` : ''}`)
    .then(({data}) => {
        dispatch(setCharacters(data.results))
        dispatch(setCount(data.info.pages))
    })
    .catch(err => console.log(err))
}