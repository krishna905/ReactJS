import React from 'react'
import { connect } from 'react-redux'
//import { buyCake } from '../redux/cake/cakeAction'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy iceCreams</button>
        </div>
    )
}

//function which gets redux state as a parameter, and returns an object
const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}
//function gets redux dispatch method as paramter, and return an object
//defining map dipatch to props
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)


//connect function(hgher order component) bcz..first paramater is a func where we are state from redux store is mapped to our component props...which relflects numOfcakes in redux stroe
//second paramter is a func which maps our dispatch of an action creator to a prop in our componnet(buyCake())
