import {createStore, combineReducers, applyMiddleware} from 'redux';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {promiseReducer, authReducer, taskReducer} from "../reducers";
import rootSaga from '../sagas'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    auth : authReducer,
    promise : promiseReducer,
    tasks : taskReducer
}), applyMiddleware(sagaMiddleware))


sagaMiddleware.run(rootSaga);



export default store;









