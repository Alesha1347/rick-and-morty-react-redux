import Form from 'react-bootstrap/Form';

import { useContext } from 'react';
import {RAMContext} from '../../store/context'

export function MySearch({setSearch}){
    const {setLoading} = useContext(RAMContext)

    const timeout = 0
    const searchCharacters = value => {
        setLoading()
        if(timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            setSearch(value)
        }, 1000)
    }

    return (
        <>
      <Form.Control
        type="text"
        id="inputSearch"
        placeholder='search...'
        onChange={(e) => searchCharacters(e.target.value)}
      />
        </>
    )
}