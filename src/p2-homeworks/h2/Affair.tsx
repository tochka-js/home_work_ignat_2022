import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number, affair: AffairType) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id, props.affair)
    }
    return (
        <div>
            <SuperButton onClick={deleteCallback}>x</SuperButton>
            {
                /*<button onClick={deleteCallback}>X</button>*/ // old design button
            }
            <span>{props.affair.name}</span>------------<span>{props.affair.priority}</span>
        </div>
    )
}

export default Affair
