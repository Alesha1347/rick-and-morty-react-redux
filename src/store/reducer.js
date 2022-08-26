export function reducer(state, {type, payload}){
    switch(type){
        case 'SET_CHARACTERS':{
            return {
                ...state,
                characters: payload || [],
                loading: false
            }
        } case 'SET_COUNT':{
            return{
                ...state,
                count: payload
            }
        } case 'CHANGE_CURRENT_PAGE':{
            return{
                ...state,
                currentPage: payload
            }
        }
    }
}