import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
/*import s from '../../p1-main/m1-ui/u1-app/App.module.css'*/
import s from './Header.module.css'


function Header() {
    return (

        <div className={s.dropdown}>
            <div className={s.drop}></div>
            <div className={s.dropdownContent}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.active}><span>PreJunior</span></NavLink>
                <NavLink to={PATH.JUNIOR} className={s.active}><span>Junior</span></NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={s.active}><span>Junior_Plus</span></NavLink>
            </div>
        </div>

    )
}

export default Header;
