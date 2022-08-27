import {Link} from 'react-router-dom'

export function MainCharacter(props){
    const {id, name, species, image, status} = props

    return (
        <div className="main__character">
            <div className="character__heart">&#10084;</div>
            {/* <span >&#128148;</span> */}
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