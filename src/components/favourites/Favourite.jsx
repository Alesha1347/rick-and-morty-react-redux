import { Link } from "react-router-dom"
import { useContext } from "react"
import {RAMContext} from '../../store/context'


export function Favourite(props){
    const {name, image, species, status, id} = props.fav

    const {removeFavourites, addFavourites, favourites} = useContext(RAMContext)

    return(
            <div className="main__character">
 {
                favourites.find(fav => fav.id == id) ? (
                    <span 
                    className='character__heart'
                    onClick={() => removeFavourites(id)}
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
            <Link to={`/character/${id}`}>
            <img className="character__image" src={image}/>
            </Link>
            <Link to={'/character'} className="character__info">
            <div className="character__name">{name}</div>
            <div className="character__species">{species}</div>
            <div className="character__status">{status}</div>
            </Link>
        </div>
    )
}