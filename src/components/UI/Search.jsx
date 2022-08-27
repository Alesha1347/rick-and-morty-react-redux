import Form from 'react-bootstrap/Form';

import { useCallback, useContext } from 'react';
import { RAMContext } from '../../store/context';

export function MySearch({setSearch}){

    const {setLoading} = useContext(RAMContext)

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
            setLoading()
            optimisedVersion(e.target.value)
        }}
      />
        </>
    )
}