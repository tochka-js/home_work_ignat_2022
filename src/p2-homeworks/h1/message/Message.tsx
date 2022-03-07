import React from 'react'
import {Avatar} from "./avatar/Avatar";
import {Name} from "./name/Name";
import {Time} from "./time/Time";
import {Messages} from "./messages/Messages";
import s from "./Message.module.css"
// import {findAllByDisplayValue} from "@testing-library/react";

type MessagePropsType = {
    avatar: string,
    name: string
    messages: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <Avatar avatar={props.avatar}/>
            <div className={s.messageTitle}>
                <Name name={props.name}/>
                <Messages messages={props.messages}/>
                <Time time={props.time}/>
            </div>
        </div>
    )
}

export default Message;



