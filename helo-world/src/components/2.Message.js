import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome visitor'

        }
    }
    changeMessage = () => {
        this.setState({
            message: 'ThankYou for subscribing'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message} from message.js</h1>
                <button onClick={this.changeMessage}>Subscribe</button>
            </div>
        )
    }
}
export default Message