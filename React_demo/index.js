///Single reducer with multiple actions

const redux = require('redux')

const createStore = redux.createStore



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

const initialState = {
    numOfCakes : 10,
    numOfRolls : 20
}
const reducer = (state=initialState, action) =>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        } 
        case BUY_ROLLS : return{
            ...state,
            numOfRolls : state.numOfRolls  - 1

        }
        default : return state
    }

}

const store = createStore(reducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState())) 
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyRolls())
store.dispatch(buyRolls())

unsubscribe()

//output
// Initial state { numOfCakes: 10 }
// Updated state { numOfCakes: 9 }
// Updated state { numOfCakes: 8 }
// Updated state { numOfCakes: 7 }


