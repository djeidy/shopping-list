import {combineReducers} from 'redux'; 
import itemReducer from './itemReducer'; 

const rootReducers = combineReducers({
    item: itemReducer
});

export default rootReducers; 