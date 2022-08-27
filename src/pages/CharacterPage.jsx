import { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"

import {RAMContext} from '../store/context'
import api from '../config'
import { Character } from "../components/characterPage/Character"
import {Preloader} from '../components/UI/Preloader'


export function CharacterPage(){

    const {id} = useParams()
    const {
        character,
        setCharacter,
        clearDetails,
        setLoading,
        loading
    } = useContext(RAMContext)

    useEffect(() => {
        setLoading()
        api.get(`/character/${id}`)
        .then(data => {
            setCharacter(data.data)
        })
        return () => clearDetails()
    }, [])
    
    return(
        <div className="character__page">
            {
                loading ? <div className="preloader__page"><Preloader/></div> : <Character {...character}/>
            }
        </div>
    )
}