import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true

        }
    }

    render() {
        //4th approach---Short circuit operator approch---this method is like either render something if condition satosfies else nothing render on the screen
        //  return this.state.isLoggedIn && <div>Welcome krishna</div>


        //3rd approach ---terinary contional operator...we can use these inside jsx
        return this.state.isLoggedIn ? (
            <div>Welcome krishna</div>
            ) : (
            <div>Welcome guests</div>
            )
        


        //2nd approach
        //using  element variable approach..
        //this stores the variables ..so that it makes code simpler, because in few cases we need only small has to be changed
        // so we declare an element and store the elemnt based on the condition

        // let message 
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Krishna</div>
        // } else{
        //     message = <div>Welcome guest</div>
        // }

        // return <div>{message}</div>


        //1st approach
        //Traditonal approach.....we cannot put contional statements inside jsx

        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Krishna</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }


        //we need to use conditions to display either of the elements

        // return (
        //     <div>
        //         <div> Welcome Krishna</div>
        //         <div>Welcome Guest</div>

        //     </div>

        // )
    }
}

export default UserGreeting
