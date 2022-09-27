import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Mmeo Component')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)
