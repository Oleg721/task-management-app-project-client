import { put, takeEvery, takeLatest, take , all, call} from 'redux-saga/effects'
import {actionPromise} from "../actions";

import {gql} from "../utility";


export function* watchAsyncUserAction() {
    yield takeLatest(`GET_USERS_ASYNC`, getUsersAsync);
}


function* getUsersAsync() {
    const promise = gql(`query{
  getUsers
  {
    id
    name
    login
  }
}`,{})
    yield put(actionPromise(`getAllUsers`, promise))
}


