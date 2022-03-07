import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = s.error // need to fix with (?:)

    return (
        <div>

            <SuperInputText value={name} onChange={setNameCallback} className={inputClass}/>
            {
                /*<input value={name} onChange={setNameCallback} className={inputClass}/>*/ // old design input
            }
            <span className={inputClass}>{error}</span>
            <SuperButton disabled={!name.length ? true : !!error} onClick={addUser}>add</SuperButton>
            {
                /*<button disabled={!name.length ? true : !!error} onClick={addUser}>add</button>*/ //old design button
            }
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
