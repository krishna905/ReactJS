import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()

        //by using callback...passing dom element as paramter in set method
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef=element
        }
    }
    componentDidMount(){
        //React will call the ref callback with DOM element when the component mounts and call it with null when it unmounts
        //so we need to check value exists on the reference property  by if condition

        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)

    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <input type="text" ref={this.setCbRef}></input>
                <button onClick={this.clickHandler}>Click</button>

            </div>
        )
    }
}

export default RefsDemo


