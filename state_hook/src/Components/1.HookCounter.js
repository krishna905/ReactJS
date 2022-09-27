import React from 'react'
import { useState } from 'react'

function HookCounter() {

  const [count, setCount] = useState(0)
  const [txt, setTxt] = useState('kr')

  const increment = () => {
    setCount(count + 1)
    setTxt('NEWTIN')
    console.log(txt)

  }

  return (
    <div>
      <button onClick={increment}>Count {count}</button>
      <input type={'text'} onChange={increment}></input>
    </div>
  )
}

export default HookCounter
