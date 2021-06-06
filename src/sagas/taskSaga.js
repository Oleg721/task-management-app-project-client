import { put, takeEvery, takeLatest, take , all, call} from 'redux-saga/effects'
import {actionPromise, actionAddTask} from "../actions";
import store from "../store";
import {gql} from "../utility";


export function* watchAsyncTaskAction() {
   yield takeEvery(`GET_USER_PROJECTS` ,getUserProjects);
   yield takeLatest(`ADD_CHILDREN_TASKS`, addChildrenTask)
/*    yield takeLatest(`GET_USERS_ASYNC`, getUsersAsync);
    yield takeLatest(`USER_PROJECTS` , getUserProjects);*/
}


function* getUserProjects() {
    console.log(`USER PROJECTS`)
    const tasks = yield gql(`query getProjects{
  getUserProjects{
    id
    name
    state
    description
    startDate
    endDate
    path
  }
}`,{})
    if(!tasks) return;
    for (let task of tasks){
        yield put(actionAddTask(task))
    }
}


function* addChildrenTask({task}) {
    console.log(`CHILDREN TASK`)
    console.log(JSON.stringify(task))
    const tasks = yield gql(`query taskChildren($task: TaskInput) {
  getTaskChildren(Task : $task) {
    id
    name
    state
    description
    startDate
    endDate
    path
  }
}`, JSON.stringify({task : {...task}}))
    console.log(tasks)
    for (let task of tasks){
        yield put(actionAddTask(task))
    }
}