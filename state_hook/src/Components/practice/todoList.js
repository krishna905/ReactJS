import React from 'react'
import { useState } from 'react'

function TodoList() {
    const [msg, setMsg] = useState('')
    const [displayText, setDisplayText] = useState('')
    const [items, setItems] = useState([])

    const handleChange = (e) => {
        setMsg(e.target.value)
    }


    const handleClick = (e) => {
        //e.preventDefault()
        setDisplayText(msg)
        setItems([...items, {
            id: items.length,
            value: msg
        }])
    }
    return (
        <div>
            <input type="text" value={msg} onChange={e => handleChange(e)}></input>
            <button onClick={e => handleClick(e)}>display TO-DO</button>

            {(displayText && <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>)}
        </div>
    )
}

export default TodoList
