const {gql} = require(`../utility`)
const {actionPromise} = require(`./actionPromise`);




export const actionUsers = (login, password) => {
    const promise = gql(`query{
  getUsers
  {
    id
    name
    nickName
  }
}`,{})
    console.log(`!!!!!!!!!!!!!`)
    console.log(promise)
    return actionPromise('getAllUsers', promise)
}



export const actionLogin = (login, password) => {
   const promise = gql(`query login($login:String, $password: String){
                                        login(nickName:$login , password : $password)
                                        }`,{login, password})

    //const promise = gql(`query login2{login (nickName: "pumpkin", password: "qwerty12345")}`,{})

    return actionPromise('login', promise)
}

export const actionVerifyToken = (authToken) =>{

    const promise = gql(`query verify($authToken: String){
                                    verifyToken(authToken: $authToken)
                                     }`,{authToken})

    //const promise = gql(`query login2{login (nickName: "pumpkin", password: "qwerty12345")}`,{})

    return actionPromise('verifyToken', promise)
}



export const actionAuthLogin = (authToken) => ({type: `LOGIN`, jwt: authToken});


export const actionAuthLogout = () => ({type: `LOGOUT`});








