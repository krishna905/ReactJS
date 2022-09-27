import React, { useState } from 'react'
import {MemoizedChildA} from './ContextChild'

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider


// export const ContextParent = () => {
  export const ContextParent = ({children}) => {
  const [count, setCount] = useState(0)

  console.log('ContextParent Render')
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      <CountProvider value={count}>
        {/* <MemoizedChildA /> */}
        {children}
      </CountProvider>
    </div>
  )
}


//When u click on count button, state changes and parent comp re-renders, Now React go through the jsx and gets to know it has child components
// but the child component is wrapped with react memo. React checks whther props has changed
//As childA has no props so childA wont rendered..ChildB inside childA also wont renderd , as it is not the one consuming Context...ChildC inside ChildB gets re-rendered as  count as props and count has changed bcz it is the one consuming context
//This is all happening good because we created MemoizedChildA in ContextChild.js with React.memo

//or

// you can pass child as a prop from app component..which means contextParent couldnt change props itself....React go through compoenent tree, checks which child is consuming and renders that particular child  , wehen parent rnders

