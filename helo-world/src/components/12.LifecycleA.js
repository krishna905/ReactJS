import React, { Component } from 'react'
import LifeCycleB from './12.LifecycleB'

class LifecycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Krishna'

    }
    console.log('LifeCycleA constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifeCycleA shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleA getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('LifeCycleA commponentDidUpdate')
  }

  changeState = () => {
    this.setState({
      name: 'Isaac Newton'
    })

  }


  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        <div>LifeCycleA </div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifecycleA
