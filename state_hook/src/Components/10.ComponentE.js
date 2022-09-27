import React, { Component, useContext } from 'react'
import ComponentF from './10.ComponentF'
import {UserContext,ChannelContext} from './10.UserContext'



function ComponentE() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
   
    
    return (
      <div>
        {user} - {channel}
        <ComponentF/>
      </div>
    )
  }

export default ComponentE
