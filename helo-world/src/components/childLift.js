import React from 'react'

function ChildLift({ counter, greet, greet1 }) {

    return (

        < div >
            <button onClick={greet}>Increment</button>
            <button onClick={greet1}>Decrement</button>
            <h5>Count - {counter}</h5>

        </div >
    )
}
export default ChildLift