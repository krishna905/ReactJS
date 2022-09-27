import React, { Component } from 'react'
import ComponentF from './23.ComponentF'
import UserContext from './23.userContext'

export class ComponentE extends Component {
    static contextType = UserContext
    
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF/>
      </div>
    )
  }
}

export default ComponentE
