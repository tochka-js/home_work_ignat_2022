import React from "react";
import s from "./Messages.module.css"
type MessagesPropsType = {
    messages: string
}

export function Messages(props: MessagesPropsType) {
    return (
        <div className={s.messages}>
            {props.messages}
        </div>
    )
}