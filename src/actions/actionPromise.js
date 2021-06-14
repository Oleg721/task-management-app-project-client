export const actionPending = name => ({type: 'PROMISE', status: 'PENDING', name})
export const actionResolved = (name, payload) => ({type: 'PROMISE', status: 'RESOLVED', payload, name})
export const actionRejected = (name, error) => ({type: 'PROMISE',status: 'REJECTED', error, name})

export const actionPromise = (name, promise)=>({type: 'PROMISE_ASYNC', name, promise})
