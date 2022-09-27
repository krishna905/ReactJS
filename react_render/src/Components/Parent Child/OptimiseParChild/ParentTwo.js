import React from 'react'
import { useState } from 'react'
import {MemoizedChildTwo } from './ChildTwo'


export const ParentTwo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Krishna')

    console.log('ParentTwo Rendering')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={()=>setName('Developer')}>Change name</button>
             <MemoizedChildTwo name={name}/>
        </div>
    )
}



