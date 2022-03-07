import React from 'react'
import Message from "./message/Message";
import s from "./HW1.module.css"

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    messages: 'some text',
    time: '22:00',
}
function HW1() {

    return (
        <div className={s.hw1}>
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                messages={messageData.messages}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
