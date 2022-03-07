import React from 'react'
import {AffairType} from "./HW2";
type AffairPropsType = {
    affair:AffairType
    deleteAffairCallback:(id:number,affair:AffairType)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id,props.affair)
    }
    return (
        <div>
            <button onClick={deleteCallback}>X</button>
            <span>{props.affair.name}</span>-----<span>{props.affair.priority}</span>
        </div>
    )
}

export default Affair
