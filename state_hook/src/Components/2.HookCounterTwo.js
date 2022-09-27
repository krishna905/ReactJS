import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const [items, setItems] = useState([])

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: count
        }])
    }


    return (
        <div>
            Count : {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Incrmeent 5</button>
            <button onClick={addItem}>Capture</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.id} --- {item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounterTwo
