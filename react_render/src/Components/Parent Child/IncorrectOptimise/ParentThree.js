import React from 'react'
import { useState } from 'react'
import { MemoizedChildThree } from './ChildThree'


export const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Krishna')

    console.log('ParentThree Rendering')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Developer')}>Change name</button>
            <MemoizedChildThree name={name}>
                <strong>Hello</strong>
            </MemoizedChildThree>
        </div>
    )
}


//when u click on count button, children also re-rendering
//becaue of the chldern props...Props.children is always a new refernce which causes child compoennets to always render
//We shoudl not wrap child compomnent with React.memo when the child compoents itseld as  children elements(strong eleent in children)


