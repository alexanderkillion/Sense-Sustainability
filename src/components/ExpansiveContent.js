import React, { useState } from "react"
import {BiPlus, BiMinus} from 'react-icons/bi'


export default function ExpansiveContent(props) {
    
    const { title, content } = props
    const [ toggle, setToggle ] = useState(false)

    function toggleContent(){
        setToggle(prevToggle => !prevToggle)
    }

    return (
        <li>
            <h4 onClick={toggleContent} style={{cursor: 'pointer'}} >{!toggle ? <BiPlus /> : <BiMinus />} {title}</h4>
            {toggle && <p>{content}</p>}
        </li>
    )
}