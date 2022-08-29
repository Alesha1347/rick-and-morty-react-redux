import { useEffect, useContext } from "react"
import {RAMContext} from '../store/context'
import api from '../config'
import {useNavigate} from 'react-router-dom'

import {MainCharacters} from '../components/main/MainCharacters'
import { Preloader } from "../components/UI/Preloader"
import { MyPagination } from "../components/UI/Pagination"
import { MySelect } from "../components/UI/Select"
import { MySearch } from "../components/UI/Search"

export function Main(){

    const navigate = useNavigate()

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
        const queryParams = {
            page: currentPage
        }   
        if(currentPage !== 1) {
            navigate(`?page=${currentPage}`)
        } if(status) {
            navigate(`?page=${currentPage}&status=${status}`)
            queryParams.status = status
        } if(searchValue){
            navigate(`?page=${currentPage}&name=${searchValue}`)
            queryParams.name = searchValue
        } if(status && searchValue){
            navigate(`?page=${currentPage}&name=${searchValue}&status=${status}`)
        }
        api.get(`character/`, queryParams)
        .then(data => {
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