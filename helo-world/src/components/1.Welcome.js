import React,{Component} from "react";

class Welcome extends Component{
   /* render(){
        return <h1> Welcome {this.props.name} a.k.a {this.props.role} from Welcome.js</h1>
    }*/

    //destruction props
    render(){
        const {name, role} = this.props
        return (
            <h1>Welcome {name} a.k.a {role} i.e., destructuring from welcome </h1>
        )
    }

    //destrruction state properties
    //const {state1, state2} = this.state
}
export default Welcome