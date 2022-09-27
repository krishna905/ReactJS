import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        //here when we use incrmentFive button, React does multiple increment calls into single update for better performance
        //so  when u need to update anything, pass the function as an argument to the setState method,  instead of passing in as anobject
        //     this.setState(
        //         {
        //             count : this.state.count + 1
        //         },
        //          ()=>{
        //             console.log('Calbback value ',this.state.count)
        //         }
        //         )
        //         console.log(this.state.count)

        // }
        //here when we use incrmentFive button, React does multiple increment calls into single update for better performance
        //so  when u need to update anything, pass the function as an argument to the setState method,  instead of passing in as a regular object
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => { this.incrementFive() }}>Increment</button>
            </div>
        )
    }
}

export default Counter
