import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {promiseReducer, authReducer} from "../reducers";


const store = createStore(combineReducers({
    auth : authReducer,
    promise : promiseReducer
}), applyMiddleware(thunk))

export default store;









