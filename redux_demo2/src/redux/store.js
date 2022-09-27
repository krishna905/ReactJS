import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk)))

export default store

//composedWithDevTools is library to debug react apps using inspecting and reactDevTools extensionin chrome



//we cannnot put more than one reducer in createStore method, so
//we create root reducer where we keep all the reducers together using combine reducer
