import {useState} from 'react'

function useCounter(initialState = 0, value) {
    //when u put a parameter=0 in useCounter function,it acts like default initialization.
    //so when 21.CounterSix.js pass 10 as argument, so tat counter starts from 10.
    //but 21.CouterFive.js didnt passs anything, so it takes default value of passed parameter

    //Second parameter is the value they wanted to manipulated on button click
    const [count, setCount] = useState(initialState)

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(initialState)
    }
    return [count, increment, decrement, reset]
}

export default useCounter
