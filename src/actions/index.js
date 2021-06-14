const {gql} = require(`../utility`)


const {actionPromise, actionPending, actionRejected, actionResolved} = require(`./actionPromise`);

export {actionPending, actionResolved, actionRejected, actionPromise}

export const actionRegistration = (user) => ({type: `REGISTRATION`, user: user});

export const actionGetAllUsers = ()=>({type : 'GET_USERS_ASYNC'});

export const actionGetUserTask = ()=>({type : 'GET_USER_TASK'});

export const actionAuthLogin = ( authToken) => ({type: `AUTH_LOGIN`, jwt: authToken});

export const actionAuthLogout = () => ({type: `LOGOUT`});

export const actionLogin = (login, password) => ({type: `LOGIN`, password: password, login:login});

export const actionUserProjects = ()=>({type: "GET_USER_PROJECTS"});

export const actionAddTask = (task)=>({type: `ADD_TASK`, task : task });

export const actionAddChildrenTask = (task)=>({type : 'ADD_CHILDREN_TASKS', task : task});

export const actionCreateTask = (task, taskUserId, parentTaskId)=>({type: `CREATE_TASK`, task: task, taskUserId : taskUserId, parentTaskId: parentTaskId})

export const actionUpdateTask = (task)=>({type : 'UPDATE_TASK', task : task});




