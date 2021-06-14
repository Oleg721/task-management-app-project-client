import { put, takeEvery, takeLatest, take , all, call} from 'redux-saga/effects'
import {actionPromise, actionAddTask, actionAddChildrenTask} from "../actions";
import store from "../store";
import {gql} from "../utility";



export function* watchAsyncTaskAction() {
   yield takeEvery(`GET_USER_PROJECTS` ,getUserProjects);
   yield takeLatest(`ADD_CHILDREN_TASKS`, addChildrenTask);
   yield takeEvery(`CREATE_TASK`, createTask)
    yield takeEvery(`UPDATE_TASK`, updateTask)
    yield takeEvery(`GET_USER_TASK`, getUserTasks)
}


function* getUserTasks(){
    const promise = gql(`query getUserTasks {
                                    getUserTasks{
                                            id
                                            name
                                            state
                                            description
                                            startDate
                                            endDate
                                            path
                                      }
}`);
    yield put(actionPromise(`usersTask`, promise));
}


function* updateTask({task}){
    yield gql(`mutation updateTask($task: TaskInput) {
                                          updateTask(Task : $task) {
                                            id
                                            name
                                            state
                                            description
                                            startDate
                                            endDate
                                            path
  }
}`, JSON.stringify({task:{id: task.id, state: task.state }}));
}


function* createTask({task, taskUserId, parentTaskId }){
    const promise = yield gql(`mutation ct($task:TaskInput, $usersId:[ID], $parentTaskId:ID){
                                        createTask(Task: $task, usersId: $usersId, parentTaskId: $parentTaskId) {
                                            id
                                            name
                                            state
                                            description
                                            startDate
                                            endDate
                                            path
                                            countChildren
                                            }
}`, JSON.stringify({task : {...task}, usersId: taskUserId, parentTaskId : parentTaskId }));
    yield put(actionPromise(`createTask`, promise));
}


function* getUserProjects() {
    const tasks = yield gql(`query getProjects{
                                        getUserProjects{
                                            id
                                            name
                                            state
                                            description
                                            startDate
                                            endDate
                                            path
                                            countChildren
                                          }
}`,{})
    if(!tasks) return;
    for (let task of tasks){
        yield put(actionAddTask(task))
    }
}


function* addChildrenTask({task}) {
    const tasks = yield gql(`query taskChildren($task: TaskInput) {
                                          getTaskChildren(Task : $task) {
                                                id
                                                name
                                                state
                                                description
                                                startDate
                                                endDate
                                                path
                                                countChildren
                                              }
}`, JSON.stringify({task : {...task}}))
    for (let task of tasks){
        yield put(actionAddTask(task))
    }
}