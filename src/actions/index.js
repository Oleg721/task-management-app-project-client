const {gql} = require(`../utility`)
const {actionPromise, actionPending, actionRejected, actionResolved} = require(`./actionPromise`);




export {actionPending, actionResolved, actionRejected, actionPromise}


export const actionGetAllUsers = ()=>({type : 'GET_USERS_ASYNC'})


export const actionAuthLogin = ( authToken) => ({type: `AUTH_LOGIN`, jwt: authToken});


export const actionAuthLogout = () => ({type: `LOGOUT`});


export const actionLogin = (login, password) => ({type: `LOGIN`, password: password, login:login});




/*export const actionVerifyToken = (authToken) =>{

    const promise = gql(`query verify($authToken: String){
                                    verifyToken(authToken: $authToken)
                                     }`,{authToken})

    //const promise = gql(`query login2{login (nickName: "pumpkin", password: "qwerty12345")}`,{})

    return actionPromise('verifyToken', promise)
}*/





