import React from 'react'

function InlineStyle() {
  const heading = {
    fontSize: '72px',
    color: 'steelblue'
  }
  return (
    <div>
      <h1 className='error'>Error</h1>
      <h2 style={heading}>InlineStyle</h2>
    </div>
  )
}

export default InlineStyle
