import {createStore, applyMiddleware, compose} from 'redux'; 
import thunk from 'redux-thunk'; 
import rootReducers from './reducers'; 

const initialeSate = {};

const middleware = [thunk]; 

const store = createStore(rootReducers, initialeSate, compose(
    applyMiddleware(...middleware),

))

export default store; 