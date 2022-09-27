//Multiple reducers for multiple actions
const redux = require('redux')

//middleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

//store
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleWare = redux.applyMiddleware




const BUY_CAKE = 'BUY_CAKE';
const BUY_ROLLS = 'BUY_ROLLS'


//Action
//fucntions which returns the action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first_redux_action'

    }
}

function  buyRolls(){
    return {
        type : BUY_ROLLS
    }
}


//Reducer
//(prevState, action) => newState
const initialStateCake ={
    numOfCakes : 10
}
const initialStateRolls={
    numOfRolls : 20

}
const cakeReducer = (state=initialStateCake, action) =>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        } 
        
        default : return state
    }

}
const rollReducer = (state=initialStateRolls, action) =>{
    switch(action.type){ 
        case BUY_ROLLS : return{
            ...state,
            numOfRolls : state.numOfRolls  - 1
        }
        default : return state
    }

}

const rootReducer = combineReducers({
    cake : cakeReducer,
    rolls: rollReducer
})
const store = createStore(rootReducer, applyMiddleWare(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() =>{}) 
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyRolls())
store.dispatch(buyRolls())

unsubscribe()

//output
// Initial state { cake: { numOfCakes: 10 }, rolls: { numOfRolls: 20 } }
// Updated state { cake: { numOfCakes: 9 }, rolls: { numOfRolls: 20 
// } }
// Updated state { cake: { numOfCakes: 8 }, rolls: { numOfRolls: 20 
// } }
// Updated state { cake: { numOfCakes: 7 }, rolls: { numOfRolls: 20 
// } }
// Updated state { cake: { numOfCakes: 7 }, rolls: { numOfRolls: 19 
// } }
// Updated state { cake: { numOfCakes: 7 }, rolls: { numOfRolls: 18 
// } }

//by using multiple reducers, we get global state object
//to acces only cakes -> state.cake.numOfCakes
//to access only rolls -> state.rolls.numOfRolls
//cake and rolls are  respective keys of combinng reducers(root reducer)

//When u dispatch an action , both reducers receives the action,  
//but based on the actiob creator fucntion , one action perfroms and other gets discardded 

//In  this code, each of the reducers are manageing its own part of the global state, the state paramter is diferent for every reducer
//and correspond to the part of the state it manages







//Using logger middleare
//we put applymiddleware func and passed logger as a paramter in createStore method
//removed console log  in subscribe mthod
// Initial state { cake: { numOfCakes: 10 }, rolls: { numOfRolls: 20 } }
//  action BUY_CAKE @ 13:04:35.519
//    prev state { cake: { numOfCakes: 10 }, rolls: { numOfRolls: 20 } }
//    action     { type: 'BUY_CAKE', info: 'first_redux_action' }   
//    next state { cake: { numOfCakes: 9 }, rolls: { numOfRolls: 20 
// } }
//  action BUY_CAKE @ 13:04:35.523
//    prev state { cake: { numOfCakes: 9 }, rolls: { numOfRolls: 20 
// } }
//    action     { type: 'BUY_CAKE', info: 'first_redux_action' }   
//    next state { cake: { numOfCakes: 8 }, rolls: { numOfRolls: 20 
// } }
//  action BUY_CAKE @ 13:04:35.527
//    prev state { cake: { numOfCakes: 8 }, rolls: { numOfRolls: 20 
// } }
//    action     { type: 'BUY_CAKE', info: 'first_redux_action' }   
//    next state { cake: { numOfCakes: 7 }, rolls: { numOfRolls: 20 
// } }
//  action BUY_ROLLS @ 13:04:35.532
//    prev state { cake: { numOfCakes: 7 }, rolls: { numOfRolls: 20 
// } }
//    action     { type: 'BUY_ROLLS' }
//    next state { cake: { numOfCakes: 7 }, rolls: { numOfRolls: 19 
// } }
//  action BUY_ROLLS @ 13:04:35.535
//    prev state { cake: { numOfCakes: 7 }, rolls: { numOfRolls: 19 
// } }
//    action     { type: 'BUY_ROLLS' }
//    next state { cake: { numOfCakes: 7 }, rolls: { numOfRolls: 18 
// } }


