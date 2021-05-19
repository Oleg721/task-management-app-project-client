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


const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))
