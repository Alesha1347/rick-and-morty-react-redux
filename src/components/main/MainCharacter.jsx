export function MainCharacter(props){
    const {id, name, species, image} = props

    return (
        <div className="main__character">
            <img className="character__image" src={image}/>
            <div className="character__info">
            <div className="character__name">{name}</div>
            <div className="character__species">{species}</div>
            </div>
        </div>
    )
}