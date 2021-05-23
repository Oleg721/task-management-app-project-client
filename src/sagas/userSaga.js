import { put, takeEvery, takeLatest, take , all, call} from 'redux-saga/effects'
import {actionPromise} from "../actions";

import {gql} from "../utility";


export function* watchAsyncAction() {
    yield takeLatest(`GET_USERS_ASYNC`, getUsersAsync);
    yield takeLatest(`USER_PROJECTS` , getUserProjects)
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
    //yield put({type: `PROMISE_ASYNC` , name: `getAllUsers`, promiseFunc : promise})
}



function* getUserProjects() {
    console.log(`USER PROJECTS`)
    const promise = gql(`query getProjects{
  getProjects{
    id
    name
    description
    startDate
    endDate
  }
}`,{})
    yield put(actionPromise(`userProjects`, promise))
}