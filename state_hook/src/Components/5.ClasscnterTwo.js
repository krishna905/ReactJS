import React, { Component } from 'react'

class ClasscnterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
         name : ''
      }
    }
    componentDidMount(){
        document.title = `You clicked ${this.state.count} times`;
        // this.interval = setInteval(this.tick, 1000)
    }
    componentDidUpdate(prevProps, prevState){
      if(prevState.count !== this.state.count){
         console.log('updating title')
      }
      document.title = `You clicked ${this.state.count} times`;
    }
  render() {
    return (
      <div>
        <input 
        type='text'
        value={this.state.name}
        onChange={e =>{this.setState({name:e.target.value})
      }}
      />
        <button onClick={()=> this.setState({count:this.state.count +1})}>
            Clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default ClasscnterTwo


//even if count didnt change console logs increasing...to avoid this we put if condition.

