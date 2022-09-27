import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buyIceCream } from '../redux'

function HooksIceContainer() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
   const dispatch=  useDispatch()
  return (
    <div>
      <h2>Number of iceCreams - {numOfIceCreams} </h2>
      <button onClick={()=> dispatch(buyIceCream())}>Buy iceCream</button>
    </div>
  )
}

export default HooksIceContainer
