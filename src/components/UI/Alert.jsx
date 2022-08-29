import { useEffect, useContext } from "react";
import {RAMContext} from '../../store/context'

export function Alert(){
    const {alertName, closeAlert} = useContext(RAMContext)

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)

        return () => clearTimeout(timerId)
    }, [alertName])

    return <div className="alert__container">
    <div className="alert__custom"><span className="alert__name">{alertName}</span> добавлен в избранное</div>
        </div>
}