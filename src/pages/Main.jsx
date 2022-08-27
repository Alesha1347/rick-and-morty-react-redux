import { useEffect, useContext } from "react"
import {RAMContext} from '../store/context'
import api from '../config'

import {MainCharacters} from '../components/main/MainCharacters'
import { Preloader } from "../components/UI/Preloader"
import { MyPagination } from "../components/UI/Pagination"
import { MySelect } from "../components/UI/Select"
import { MySearch } from "../components/UI/Search"

export function Main(){

    const {
        loading,
        setCharacters,
        setCount,
        count,
        currentPage,
        changePage,
        status,
        changeStatus,
        setSearch,
        searchValue
    } = useContext(RAMContext)

    useEffect(function getCharacters(){
        api.get(`character/?page=${currentPage}&status=${status}&name=${searchValue}`)
        .then(data => {
            // console.log(data.data)
            setCharacters(data.data.results)
            setCount(data.data.info.pages)
        })
    }, [currentPage, status, searchValue])
    
    return (
        <div className="main">
            <div className="main__options">
            <div className="select">
            {
                <MySelect 
                changeStatus={changeStatus}
                />
            }
            </div>
            <div className="search">
                {
                    <MySearch
                    setSearch={setSearch}
                    />
                }
            </div>
            </div>


            {
                loading ? <div className="preloader"><Preloader/></div> : <MainCharacters/>
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