import React from 'react'
import { connect } from 'react-redux'
//import { buyCake } from '../redux/cake/cakeAction'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
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
        buyCake: () => dispatch(buyCake())

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)


//connect function(hgher order component) bcz..first paramater is a func where we are state from redux store is mapped to our component props...which relflects numOfcakes in redux stroe
//second paramter is a func which maps our dispatch of an action creator to a prop in our componnet(buyCake())
