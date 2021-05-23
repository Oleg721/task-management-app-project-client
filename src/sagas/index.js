import {all} from 'redux-saga/effects'
import {watchPromiseAsync} from "./promiseSaga";
import {watchAsyncAction} from "./userSaga";
import {watcherAuthorization} from "./authSaga";


export default function* rootSaga() {
    yield all([
        watchPromiseAsync(),
        watchAsyncAction(),
        watcherAuthorization()
    ])
}


