import {gql} from'../utility'
import {actionPromise, actionAuthLogin, actionUserProjects} from "../actions";
import { put, takeEvery, takeLatest, take , all, call} from 'redux-saga/effects'



export default function* watcherAuthorization(){
    yield takeLatest(`REGISTRATION`, registrationSaga)
    yield takeLatest(`LOGIN`, loginSaga);
    yield takeLatest(`AUTH_LOGIN`, authLoginSaga);
}


function* registrationSaga({user: {login, name, password}}){
    const authToken = yield  gql(`mutation regUser($user:UserInput) {
                                          registration(User: $user)
                                            }`,JSON.stringify({user: {login : login, name : name, password: password}}));
    localStorage.authToken = authToken;
   console.log(authToken);
    yield put(actionAuthLogin(authToken));
}


function* loginSaga({login, password}){
    const authToken = yield  gql(`query login($login:String, $password: String){
                                        login(login:$login , password : $password)
                                        }`,{login, password});
    localStorage.authToken = authToken;
    console.log(authToken);
    yield put(actionAuthLogin(authToken));
}


function* authLoginSaga({authToken}) {
    yield call(actionAuthLogin, authToken);
    yield put(actionUserProjects());
}

