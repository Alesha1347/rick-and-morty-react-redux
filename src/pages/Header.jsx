import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {RAMContext} from '../store/context'

export function Header(){
    const {favourites} = useContext(RAMContext)

    return (
        <div className="header">
            <Link to={'/'} className="header__logo">Rick and Morty</Link>
            {
                !favourites.length ? (
                    <Link to={'/favourites'} className="header__fav">&#9825;</Link>
                ) : (
                    <Link to={'/favourites'} className="header__fav">&#9829;</Link>
                )
            }
        </div>
    )
}