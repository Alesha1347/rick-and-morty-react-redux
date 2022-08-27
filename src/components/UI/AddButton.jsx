import { useContext } from 'react'
import {RAMContext} from '../../store/context'

export function AddButton(props){

    const {
        addFavourites, 
        favourites,
        removeFavourites
    } = useContext(RAMContext)

    return (
        <>
                    {
                favourites.find(fav => fav.id == props.id) ? (
                    <span 
                    className='character__heart'
                    onClick={() => removeFavourites(props.id)}
                    >&#128148;</span>
                ) : (
                    <div 
                    className="character__heart"
                    onClick={() => addFavourites(props)}
                    >
                    &#10084;
                    </div>
                )
        }
        </>
    )
}