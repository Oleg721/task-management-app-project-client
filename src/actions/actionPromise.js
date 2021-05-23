export const actionPending = name => ({type: 'PROMISE', status: 'PENDING', name})
export const actionResolved = (name, payload) => ({type: 'PROMISE', status: 'RESOLVED', payload, name})
export const actionRejected = (name, error) => ({type: 'PROMISE',status: 'REJECTED', error, name})

export const actionPromise = (name, promise)=>({type: 'PROMISE_ASYNC', name, promise})

/*
 const actionPromise = (name='default', p=delay(2000)) =>

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


const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))
*/
