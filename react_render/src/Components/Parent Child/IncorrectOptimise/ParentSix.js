import React, { useCallback, useMemo } from 'react'
import { useState } from 'react'
import { MemoizedChildSix } from './ChildSix'


export const ParentSix = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Krishna')

    const person={
        fname:'Chandhler',
        lname:"Bing"
    }

    const memoizedPerson = useMemo(()=>person,[])
     
    const handleClick = ()=>{}
     
    const memoizedHandleClick = useCallback(handleClick, [])

    console.log('ParentSix Rendering')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Developer')}>Change name</button>
            {/* <MemoizedChildSix name={name} person={memoizedPerson}/> */}
            <MemoizedChildSix name={name} handleClick={memoizedHandleClick}/>
              
        </div>
    )
}


//Issues u have facee in ParentFive.js when passing func, or object as props to child cmponent,
//child gets re-renderd
//To avoid this Incorrect optimise using React Memo, we took the help of useCallback for function as prop
// and useMemo for object as a prop


