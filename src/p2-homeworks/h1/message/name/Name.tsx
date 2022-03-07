import React from "react";
import s from "./Name.module.css"
type NamePropsType = {
    name: string
}

export function Name(props: NamePropsType) {
    return (
        <div className={s.name}>
            <p>{props.name}</p>
        </div>
    )
}