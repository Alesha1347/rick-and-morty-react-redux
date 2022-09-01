import { Favourite } from "../components/favourites/Favourite"
import {useNavigate} from 'react-router-dom'

import { useSelector } from "react-redux"
// selectors
import {selectFavourites} from '../store/favourites/favourites-selectors'

export function Favourites(){
    const navigate = useNavigate()

    const {favourites} = useSelector(selectFavourites)

    return(
        <div className="favourites">
            <button onClick={() => navigate(-1)} className="btn__back-fav">BACK</button>
            {
                favourites.map(fav => 
                <Favourite 
                {...fav}
                key={fav.id}
                />)
            }
        </div>
    )
}


// END