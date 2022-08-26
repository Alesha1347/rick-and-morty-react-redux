import { useEffect, useContext } from "react"
import {RAMContext} from '../store/context'
import api from '../config'

import {MainCharacters} from '../components/main/MainCharacters'
import { Preloader } from "../components/UI/Preloader"
import { MyPagination } from "../components/UI/Pagination"

export function Main(){

    const {
        characters,
        loading,
        setCharacters,
        setCount,
        count,
        currentPage,
        changePage
    } = useContext(RAMContext)

    useEffect(function getCharacters(){
        api.get(`character/?page=${currentPage}`)
        .then(data => {
            console.log(data.data)
            setCharacters(data.data.results)
            setCount(data.data.info.pages)
        })
    }, [currentPage])
    console.log(currentPage)
    return (
        <div className="main">
            {
                loading ? <Preloader/> : <MainCharacters/>
            }
            {
                <MyPagination 
                currentPage={currentPage} 
                count={count}
                changePage={changePage}
                />
            }
        </div>
    )
}