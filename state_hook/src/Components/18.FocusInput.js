import React, { useEffect, useRef } from 'react'

function FocusInput() {

    const inputRef =  useRef(null)

    useEffect(()=>{
     //focus the input elemnet
     inputRef.current.focus()
    },[])

  return (
    <div>
      <input ref={inputRef} type='text' />
    </div>
  )
}

export default FocusInput
