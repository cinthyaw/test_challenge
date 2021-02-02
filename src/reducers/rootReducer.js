import characterReducer from './characterReducer';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';
import {combineReducers} from 'redux';
import riskReducer from './riskReducer';
import recommendationReducer from './recommendationReducer';

//Combine all the sub reducers
const rootReducer = combineReducers({
    characters: characterReducer,
    myCounter: counterReducer,
    todos:todoReducer,
    risk: riskReducer,
    recommendation: recommendationReducer
})

export default rootReducer