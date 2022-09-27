import React, { useReducer } from 'react'
import ComponentAA from './14.ComponentA';
import ComponentBB from './14.ComponentB';
import ComponentCC from './14.ComponentC';

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function ReducerUse() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <CountContext.Provider
            value={{ countState: count, countDispatch: dispatch }}>
            <div>
                Count - {count}
                <ComponentAA />
                <ComponentBB />
                <ComponentCC />
            </div>
        </CountContext.Provider>
    )
}

export default ReducerUse
