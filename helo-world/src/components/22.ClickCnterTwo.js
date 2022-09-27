import React, { Component } from 'react'

class ClickCnterTwo extends Component {
    
    
  render() {
    const {count,incrementCounter} = this.props
    return (
      <button onClick={incrementCounter}>Clicked {count} times</button>
    )
  }
}

export default ClickCnterTwo
