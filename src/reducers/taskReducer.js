export default function taskReducer(state={},{type, task} ){

    if(!task?.path?.match(/^(\/[0-9]+)+$/)) return state;
    const {path, ...taskProps} = task;
    const idArr = path.substring(1).split(`\/`)
    let   taskNode =  {[idArr[0]] : state[idArr[0]]} || {};
    const rootTask = taskNode;

    if(type === 'ADD_TASK' || type === 'UPDATE_TASK') {
        for (let id of idArr){

            taskNode[id] ?
                taskNode[id] = {...taskNode[id]}:
                taskNode[id] = { id : id, children: {}}

            id !== idArr[idArr.length-1] ?
                taskNode = taskNode[id].children :
                taskNode[id]  = {...taskNode[id] , ...taskProps}
        }
        return { ...state,  ...rootTask }
    }


    if(type === 'DELETE_TASK') {
        console.log(task)

        for (let id of idArr){
            if(!taskNode[id]) return {}

            id !== idArr[idArr.length-1] ?
                taskNode = taskNode[id].children :
                taskNode[id]  = {...taskNode[id] , deleted : true}
        }
    }
    return state
}