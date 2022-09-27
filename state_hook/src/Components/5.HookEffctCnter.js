import React,{useEffect, useState} from 'react'

function HookEffectCnter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('');

    useEffect(()=>{
      console.log('useEffect - updating title')
        document.title = `You clicked ${count} times`
    },[count])

  return (
    <div>
      <input 
      type='text'
      value={name}
      onChange={ e => {setName(e.target.value)}}
      />
      <button onClick={()=>{setCount(count+1)}}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default HookEffectCnter

//even if count didnt change console logs increasing...to avoid this we put [] array as second paramter 
///treats as condition.

