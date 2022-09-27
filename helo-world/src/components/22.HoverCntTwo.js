import React, { Component } from 'react'

 class HoverCntTwo extends Component {
    
    
  render() {
    const {count,incrementCounter} = this.props
    return (
     <h3 onMouseOver={incrementCounter}>Hovered {count} times</h3>
    )
  }
}

export default HoverCntTwo
