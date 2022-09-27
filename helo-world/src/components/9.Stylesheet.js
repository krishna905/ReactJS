import React from 'react'
import './9.myStyle.css'

function Stylesheet(props) {
    let className = props.primary? 'primary':''
  return (
    <div>
      <h1 className={ `${className} font-xl`}>Stylesheets</h1>
    </div>
  )
}

export default Stylesheet

//passed two classnames in template literal for different styles
