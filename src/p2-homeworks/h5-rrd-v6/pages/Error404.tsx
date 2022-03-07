import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Error404.module.css'

function Error404() {
    return (
        <div>
            <NavLink className={s.error} to={'/*'}>
                <div><b>404</b></div>
                <div className={s.errorText}>Page not found!</div>
            </NavLink>
        </div>
    )
}

export default Error404
