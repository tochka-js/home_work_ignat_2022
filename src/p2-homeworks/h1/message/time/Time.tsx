import React from "react";
import s from "./Time.module.css"
type TimePropsType = {
    time: string
}

export function Time(props: TimePropsType) {
    return (
        <div className={s.time}>
            {props.time}
        </div>
    )
}