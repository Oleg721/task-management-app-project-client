import { put, takeEvery, takeLatest, take , all, call} from 'redux-saga/effects'
import {actionPromise} from "../actions";


import {gql} from "../utility";

export function* watchAsyncAction() {
    yield takeLatest(`GET_USERS_ASYNC`, getUsersAsync)
}

export function* getUsersAsync() {
    const promise = gql(`query{
  getUsers
  {
    id
    name
    nickName
  }
}`,{})
    yield put(actionPromise(`getAllUsers`, promise))
    //yield put({type: `PROMISE_ASYNC` , name: `getAllUsers`, promiseFunc : promise})
}