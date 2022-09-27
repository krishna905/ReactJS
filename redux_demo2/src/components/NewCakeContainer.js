import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
//import { buyCake } from '../redux/cake/cakeAction'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
    const [num, setNum] = useState(1);
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type='text' value={num} onChange={e=>{setNum(e.target.value)}}></input>
            <button onClick={()=> props.buyCake(num)}>Buy {num} Cake</button>
        </div>
    )
}

//function which gets redux state as a parameter, and returns an object
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
//function gets redux dispatch method as paramter, and return an object
//defining map dipatch to props
const mapDispatchToProps = dispatch => {
    return {
        buyCake: (num) => dispatch(buyCake(num))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer)


//connect function(hgher order component) bcz..first paramater is a func where we are state from redux store is mapped to our component props...which relflects numOfcakes in redux stroe
//second paramter is a func which maps our dispatch of an action creator to a prop in our componnet(buyCake())
