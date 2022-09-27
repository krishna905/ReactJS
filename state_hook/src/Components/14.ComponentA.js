import React, { useContext } from 'react'
import { CountContext } from './14.ReducerUse'

function ComponentAA() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component AA - {countContext.countState}
            <button onClick={() => { countContext.countDispatch('increment') }}>Increment</button>
            <button onClick={() => { countContext.countDispatch('decrement') }}>Decrement</button>
            <button onClick={() => { countContext.countDispatch('reset') }}>Reset</button>
        </div>
    )
}

export default ComponentAA
