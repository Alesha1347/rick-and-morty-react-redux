import {Link} from 'react-router-dom'
import { Alert } from '../components/UI/Alert'

import { useSelector } from 'react-redux'
import {selectFavourites} from '../store/favourites/favourites-selectors'

export function Header(){
    const {favourites, alertName} = useSelector(selectFavourites)

    return (
        <div className="header">
            <Link 
            to={'/'} 
            className="header__logo"
           
            >Rick and Morty</Link>
            {
                !favourites.length ? (
                    <Link to={'/favourites'} className="header__fav">&#9825;</Link>
                ) : (
                    <Link to={'/favourites'} className="header__fav">&#9829;</Link>
                )
            }
            {
                alertName && <Alert/>
            }
        </div>
    )
}