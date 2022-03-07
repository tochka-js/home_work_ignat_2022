import React from "react";
import s from "./Avatar.module.css"

type AvatarPropsType = {
    avatar: string,
}

export function Avatar(props: AvatarPropsType) {
    return (
        <div className={s.avatar}>
            <img src={props.avatar} alt=" "/>
        </div>
    )
}

