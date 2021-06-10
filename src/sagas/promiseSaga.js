import { put, takeEvery, takeLatest, take , all, call} from 'redux-saga/effects'
import {actionPending, actionResolved, actionRejected} from '../actions'




export function* watchPromiseAsync() {
    yield takeEvery('PROMISE_ASYNC', promiseAsync)
}


function* promiseAsync({name, promise = delay(2000)}) {
    yield put(actionPending(name));
    try {
        const payload =  yield promise;
        yield put(actionResolved(name, payload))
    } catch (error) {
        yield put(actionRejected(name, error))
    }
}

const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))