import React from 'react'
import { useState } from 'react'
import { MemoizedChildFour } from './ChildFour'


export const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Krishna')

    console.log('ParentThree Rendering')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Developer')}>Change name</button>
           <MemoizedChildFour name={name}/>
        </div>
    )
}


//when u click on changename, children re-renders. and time also gets updated.. because name is the porps to the chidl compoennet
//time shouldnt change when child renders...so this is incorrect
//but on count, children wont re-renders..as count is not props to the chuild compoent



