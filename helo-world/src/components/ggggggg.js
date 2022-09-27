import React, { useState } from 'react'
import ChildLift from './childLift';

function Lift() {

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1)
    }
    const Decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <ChildLift greet={Increment} greet1={Decrement} counter={count}></ChildLift>
            {/* <button onClick={Increment}>Increment</button> */}


        </div>
    )
}
export default Lift