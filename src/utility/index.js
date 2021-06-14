
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

        if ('errors' in result) throw new Error(JSON.stringify(result.errors))
        return Object.values(result.data)[0]
    })

export let gql = getGQL('/graphql');



