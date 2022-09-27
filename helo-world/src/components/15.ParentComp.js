import React, { Component } from 'react'
import MemoComp from './15.MemoComp'
import PureComp from './15.PureComp'
import RegularComp from './15.RegularComp'

class ParentComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Krishna'
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Krishna'
      })
    }, 2000)
  }

  render() {
    console.log('*******Parent Comp render*********')
    return (
      <div>
        Parent Component
        {/* <MemoComp name={this.state.name} /> */}
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
