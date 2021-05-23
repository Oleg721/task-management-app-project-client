export function promiseReducer(state={},{type, status, payload, error, name} ){


    if(type === 'PROMISE') return {...state, [name]: {status, payload, error}}
    if (type === 'LOGOUT') return  {}
    else return state
}



export const authReducer = (state = {}, action) => {


    if (action.type === 'AUTH_LOGIN'){

      //l  localStorage.authToken = action.jwt;
        //jwt_decode //взять среднюю часть токена, натравить на неё atob, а потом JSON.parse

    return {authToken: action.jwt, payload: jwt_decode(action.jwt)}
    }

    if (action.type === 'LOGOUT'){
        console.log('ЛОГАУТ')
        localStorage.removeItem(`authToken`);
        //вернуть пустой объект
        return {}
    }
    return state
}


function jwt_decode(token) {
    if(!token || token === `undefined` || token === `null`) {
        return ``};
try {
    let i =  atob(token.match(/(?<=[.]).+(?=[.])/));
    console.log(i);
    return JSON.parse(i);
} catch (e) {
    console.log(`jwt_decode err` + e.name)

}

}
