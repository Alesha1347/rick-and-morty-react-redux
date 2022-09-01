import { useEffect } from "react"
import {useNavigate} from 'react-router-dom'

import {MainCharacters} from '../components/main/MainCharacters'
import { Preloader } from "../components/UI/Preloader"
import { MyPagination } from "../components/UI/Pagination"
import { MySelect } from "../components/UI/Select"
import { MySearch } from "../components/UI/Search"

// redux
import {useSelector, useDispatch} from 'react-redux'

// actions
import {
    loadCharacters,
    changePage,
    changeStatus,
    setSearch
} from '../store/characters/characters-actions'

// selectors
import { allSelectorsCharacters } from "../store/characters/characters-selectors"


export function Main(){

    const navigate = useNavigate()

    const {
        count,
        currentPage,
        loading,
        status,
        searchValue
    } = useSelector(allSelectorsCharacters)
    const dispatch = useDispatch()


    const setPage = (page) => {
        dispatch(changePage(page))
    }
    const setStatus = (status) => {
        dispatch(changeStatus(status))
    }
    const setValue = (value) => {
        dispatch(setSearch(value))
    }

    const queryParams = {
        page: currentPage,
        status: status,
        name: searchValue
    } 

    useEffect(() => {
        dispatch(loadCharacters(queryParams))
        if(currentPage) {
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
    }, [currentPage, status, searchValue])

    return (
        <div className="main">
            <div className="main__options">
            <div className="select">
            {
                <MySelect 
                changeStatus={setStatus}
                />
            }
            </div>
            <div className="search">
                {
                    <MySearch
                    setSearch={setValue}
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
                changePage={setPage}
                />
            }
        </div>
    )
}