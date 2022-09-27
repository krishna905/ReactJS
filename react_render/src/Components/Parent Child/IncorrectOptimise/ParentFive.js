import React from 'react'
import { useState } from 'react'
import { MemoizedChildFive } from './ChildFive'


export const ParentFive = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Krishna')

    const person={
        fname:'Chandhler',
        lname:"Bing"
    }
     
    const handleClick = ()=>{}

    console.log('ParentFive Rendering')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Developer')}>Change name</button>
            {/* <MemoizedChildFive name={name} person={person}/> */}
            <MemoizedChildFive name={name} handleClick={handleClick}/>
              
        </div>
    )
}


//when u click on count button, children also re-rendering bcz person as props passed in child compoent.
//when aprent compoent re-renders new object reference gets creted and passed to child, so child also re-renders..
//which is incorrect

//even if u pass function as props to child component,React thinks ther is an state change and create new reference of handle click and passed to chold comp



