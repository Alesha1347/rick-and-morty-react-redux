import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
// actions
import {closeAlert} from '../../store/favourites/favourites-actions'
// selectors
import {selectFavourites} from '../../store/favourites/favourites-selectors'

export function Alert(){
    const dispatch = useDispatch()
    const invokeCloseAlert = () => dispatch(closeAlert())
    const {alertName} = useSelector(selectFavourites)

    useEffect(() => {
        const timerId = setTimeout(invokeCloseAlert, 3000)

        return () => clearTimeout(timerId)
    }, [alertName])

    return <div className="alert__container">
    <div className="alert__custom"><span className="alert__name">{alertName}</span> добавлен в избранное</div>
        </div>
}