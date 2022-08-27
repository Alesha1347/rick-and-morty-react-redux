import {Link} from 'react-router-dom'

export function Header(){

    return (
        <div className="header">
            <Link to={'/'} className="header__logo">Rick and Morty</Link>
            <Link to={'/favourites'} className="header__fav">&#9825;</Link>
            {/* <div className="">&#9829;</div> */}
        </div>
    )
}