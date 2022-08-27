import { useContext } from "react"
import {RAMContext} from '../store/context'

import { Favourite } from "../components/favourites/Favourite"
import {useNavigate} from 'react-router-dom'


export function Favourites(){
    const {favourites} = useContext(RAMContext)
    const navigate = useNavigate()


    return(
        <div className="favourites">
            <button onClick={() => navigate(-1)} className="btn__back-fav">BACK</button>
            {
                favourites.map(fav => 
                <Favourite 
                fav={fav}
                key={fav.id}
                />)
            }
        </div>
    )
}