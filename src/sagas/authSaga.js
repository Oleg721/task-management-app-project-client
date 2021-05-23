import {gql} from'../utility'
import {actionPromise, actionAuthLogin, actionUserProjects} from "../actions";
import { put, takeEvery, takeLatest, take , all, call} from 'redux-saga/effects'



export function* watcherAuthorization(){
    yield takeLatest(`LOGIN`, loginSaga);
    yield takeLatest(`AUTH_LOGIN`, authLoginSaga)
}

function* loginSaga({login, password}){

    //const promise = gql(`query login2{login (login: "pumpkin", password: "qwerty12345")}`,{})
    console.log(login, password);
    const authToken = yield  gql(`query login($login:String, $password: String){
                                        login(login:$login , password : $password)
                                        }`,{login, password})
    localStorage.authToken = authToken;
    console.log(authToken);
    yield put(actionAuthLogin(authToken));
}

export function* authLoginSaga({authToken}) {
    yield call(actionAuthLogin, authToken);
    yield put(actionUserProjects());
}

export const actionVerifyToken = (authToken) =>{

    const promise = gql(`query verify($authToken: String){
                                    verifyToken(authToken: $authToken)
                                     }`,{authToken})

    //const promise = gql(`query login2{login (login: "pumpkin", password: "qwerty12345")}`,{})

    return actionPromise('verifyToken', promise)
}
