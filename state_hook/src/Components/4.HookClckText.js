import React, { useEffect, useState } from 'react'

function HookClckText() {
  const [msg, setMsg] = useState('');
  const [displayText, setDisplayText] = useState('')

  const handleChange = (e) => {
    setMsg(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    setDisplayText(msg)

  }


  return (
    <div>
      <input type='text'
        value={msg}
        onChange={e => handleChange(e)}>
      </input>

      <button onClick={handleClick}>click</button>
      {displayText && <h2>{displayText}</h2>}

    </div>
  )
}

export default HookClckText
