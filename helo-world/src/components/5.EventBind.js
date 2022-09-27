import React, { Component } from 'react'

class EventBind extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        message : "Hello"
        
     }
    //  this.clickHandler =  this.clickHandler.bind(this)
   }
//    clickHandler(){
//     this.setState({
//         message:"Good bye"
//     })
//     console.log(this)
//    }

//class properties as arrow functions
clickHandler = () =>{
    this.setState({
        message : 'Good bye'
    })
}
   
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* traditional approach----bindng in render */}
        {/* <button onClick={this.clickHandler.bind(this)}>E-Click</button> */}

        {/* arrow function in render */}
        {/* <button onClick={()=> {this.clickHandler()}}>E-Click</button> */}

        {/* binding the class constructor..check bindin inside construtor method or below i wrote code using arrow funct */}
        <button onClick={this.clickHandler}>E-Click</button>
      </div>
    )
  }
}

export default EventBind
