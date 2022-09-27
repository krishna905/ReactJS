import React from 'react'

const withCounter = (WrappedComponent, incNumber) =>{
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
      
          incrementCount=()=>{
              this.setState(prevState=>{
                  return{
                      count: prevState.count + incNumber
                  }
              })
          }
          
        render(){
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props}/>
        }
    }
    return WithCounter
}
export default withCounter
