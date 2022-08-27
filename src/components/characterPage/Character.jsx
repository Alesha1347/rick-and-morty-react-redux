import {useNavigate} from 'react-router-dom'

export function Character(props){

    const {created, gender, image, species, status, name} = props.character

    const navigate = useNavigate()

    return (
        <div className="main">
            <button onClick={() => navigate(-1)} className="btn__back">BACK</button>
        <div className="character__page">
            <div className="character__heart">&#10084;</div>
            {/* <span >&#128148;</span> */}
            <div>
            <img className="character__page-image" src={image}/>
            </div>
            <div className="character__page-info">
            <div className="character__page-name">{name}</div>
            <div className="character__page-species">{species}</div>
            <div className="character__page-status">{status}</div>
            <div className="character__page-gender">{gender}</div>
            <div className="character__page-created">{created}</div>
            </div>
        </div>
        </div>
    )

}