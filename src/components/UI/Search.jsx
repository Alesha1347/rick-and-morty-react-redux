import Form from 'react-bootstrap/Form';

import { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import {setLoading} from '../../store/characters/characters-actions'

export function MySearch({setSearch}){
    const dispatch = useDispatch()
    const changeLoadingStatus = () => dispatch(setLoading())

    const debounce = (func) => {
        let timer
        return function(...args){
            const context = this
            if(timer) clearTimeout(timer)

            timer = setTimeout(() => {
                timer = null
                func.apply(context, args)
            }, 1000)
        }
    }

    const optimisedVersion = useCallback(debounce(setSearch), []) 

    return (
        <>
      <Form.Control
        type="text"
        id="inputSearch"
        placeholder='search...'
        onChange={(e) => {
            changeLoadingStatus()
            optimisedVersion(e.target.value)
        }}
      />
        </>
    )
}