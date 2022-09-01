// redux
import { useDispatch, useSelector } from "react-redux"

// actions
import {
    removeFavourites,
    addFavourites
} from '../../store/favourites/favourites-actions'

// selectors
import {selectFavourites} from '../../store/favourites/favourites-selectors'

export function AddButton(props){

    const dispatch = useDispatch()

    const addFavouritesCharacter = (props) => {
        dispatch(addFavourites(props))
    }
    const removeFavouritesCharacter = (id) => {
        dispatch(removeFavourites(id))
    }

    const {favourites} = useSelector(selectFavourites)

    return (
        <>
                    {
                favourites.find(fav => fav.id == props.id) ? (
                    <span 
                    className='character__heart'
                    onClick={() => removeFavouritesCharacter(props.id)}
                    >&#128148;</span>
                ) : (
                    <div 
                    className="character__heart"
                    onClick={() => addFavouritesCharacter(props)}
                    >
                    &#10084;
                    </div>
                )
        }
        </>
    )
}


// END