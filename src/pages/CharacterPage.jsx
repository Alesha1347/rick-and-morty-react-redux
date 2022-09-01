import { useEffect } from "react"
import { useParams } from "react-router-dom"

import api from '../config'
import { Character } from "../components/characterPage/Character"
import {Preloader} from '../components/UI/Preloader'


// redux
import { useSelector, useDispatch } from "react-redux"

// actions
import { 
    setCharacter,
    setLoading,
    clearDetails
} from "../store/characters/characters-actions"

// selectors
import {allSelectorsCharacters} from '../store/characters/characters-selectors'


export function CharacterPage(){
    const dispatch = useDispatch()

    const {
        character,
        loading
    } = useSelector(allSelectorsCharacters)

    const getCharacter = (data) => {
        dispatch(setCharacter(data))
    }
    const changeLoadingStatus = () => dispatch(setLoading())
    const clearPageDetails = () => dispatch(clearDetails())

    const {id} = useParams()

    useEffect(() => {
        changeLoadingStatus()
        api.get(`/character/${id}`)
        .then(data => {
            getCharacter(data.data)
        })
        return () => clearPageDetails()
    }, [])
    
    return(
        <div className="character__page">
            {
                loading ? <div className="preloader__page"><Preloader/></div> : <Character {...character}/>
            }
        </div>
    )
}