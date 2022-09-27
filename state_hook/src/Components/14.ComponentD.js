import React, { useContext } from 'react'
import { CountContext } from './14.ReducerUse'

function ComponentDD() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component DD - {countContext.countState}
            <button onClick={() => { countContext.countDispatch('increment') }}>Increment</button>
            <button onClick={() => { countContext.countDispatch('decrement') }}>Decrement</button>
            <button onClick={() => { countContext.countDispatch('reset') }}>Reset</button>
        </div>
    )
}

export default ComponentDD
