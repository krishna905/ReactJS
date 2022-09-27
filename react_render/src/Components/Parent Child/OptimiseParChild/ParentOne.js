import React from 'react'
import { useState } from 'react'


export const ParentOne = ({children}) => {
    const [count, setCount] = useState(0)

    console.log('ParentOne Rendering')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
             {children}
        </div>
    )
}
//To  avoid unnecesary rendering
//Component has no means of directly changing the 
//props...To  make this happen , we need to implement as Children props
// has to be rferencing the same element from the previous render, will skip the render pahse
// for childOne component.


