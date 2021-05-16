const actionPending = name => ({type: 'PROMISE', status: 'PENDING', name})
const actionResolved = (name, payload) => ({type: 'PROMISE', status: 'RESOLVED', payload, name})
const actionRejected = (name, error) => ({type: 'PROMISE',status: 'REJECTED', error, name})

export const actionPromise = (name='default', p=delay(2000)) =>

    async dispatch => {
        dispatch(actionPending(name))
        try {
            let payload = await p
            dispatch(actionResolved(name, payload))
            return payload
        }
        catch(error){
            dispatch(actionRejected(name, error))
        }
    };

export const actionUsers = (login, password) => {
    const promise = gql(`query{
  getUsers
  {
    id
    name
    nickName
  }
}`,{})
    return actionPromise('getAllUsers', promise)
}


export const actionLogin = (login, password) => {
   const promise = gql(`query login($login:String, $password: String){
                                        login(nickName:$login , password : $password)
                                        }`,{login, password})

    //const promise = gql(`query login2{login (nickName: "pumpkin", password: "qwerty12345")}`,{})

    return actionPromise('login', promise)
}



export const actionAuthLogin = (authToken) => ({type: `LOGIN`, jwt: authToken});


export const actionAuthLogout = () => ({type: `LOGOUT`});



const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))


let getGQL = url => (query, variables={}) => {
    console.log(query);
    console.log(variables);

    fetch(url, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            ...(localStorage.authToken ? {Authorization: 'Bearer ' + localStorage.authToken} : {})
        },
        body: JSON.stringify({query, variables})
    }).then(res => res.json())
        .then(result => {
            console.log(`======`);
            console.log(result);

            if ('errors' in result) throw new Error(JSON.stringify(result.errors))
            return Object.values(result.data)[0]
        })

}



let gql = getGQL('/graphql');
