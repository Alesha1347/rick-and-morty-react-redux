export function MainCharacter(props){
    const {id, name, species, image, status} = props

    return (
        <div className="main__character">
            <img className="character__image" src={image}/>
            <div className="character__info">
            <div className="character__name">{name}</div>
            <div className="character__species">{species}</div>
            <div className="character__status">{status}</div>
            </div>
        </div>
    )
}