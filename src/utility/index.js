import store from "../store/store";
import {actionAuthLogin, actionVerifyToken, actionUsers} from "../actions";



let getGQL = url => (query, variables={}) => fetch(url, {
    method: 'POST',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        ...(localStorage.authToken ? {Authorization: 'Bearer ' + localStorage.authToken} : {})
    },
    body: JSON.stringify({query, variables})
}).then(res => res.json())
    .then(result => {
        /*            console.log(`======`);
                    console.log(Object.values(result.data)[0]);*/

        if ('errors' in result) throw new Error(JSON.stringify(result.errors))
        return Object.values(result.data)[0]
    })

export let gql = getGQL('/graphql');



export function authByLocalStorage(setUser = ()=>{}) {
    if(store.getState().auth.payload || !window.localStorage.authToken) return;
    console.log(`INIT!!!!!!!!!!!!`)
    store.dispatch(actionVerifyToken(window.localStorage.authToken));

    const unsubscribeAut =  store.subscribe(() => {
        console.log(`UN_____AUTHORIZ`)
        if(store.getState().auth.payload) {
            console.log(`AUTHORIZ`)
            setUser(store.getState().auth.payload);
            unsubscribeAut();
            return;
        }

        if( !store.getState().promise.verifyToken.payload) return;
        store.dispatch(actionAuthLogin(window.localStorage.authToken));

    })

}