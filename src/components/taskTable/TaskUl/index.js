import React, {useEffect, useState} from "react";
import TaskLi from "../TaskLi";
import store from "../../../store";
import {actionAddChildrenTask} from "../../../actions";
import PrintUl from "../PrintUl";


const TaskUl = ({open = false, tasks, deep, id , createTaskCB}) =>{

    const [state, setState] = useState(open);

    return (<ul >
        <TaskLi open={state}
                task={tasks}
                deep={deep}
                cbFunc={()=>{
                        store.dispatch(actionAddChildrenTask({id:id}));
                        setState(!state)
                    }}
                createTaskCB={createTaskCB}
        />

        {state && <PrintUl taskTree={tasks.children}
                           deep={deep + `>>`}
                           id={id+ `ul`}
                           cdFunc={()=>{}}
                           createTaskCB={createTaskCB}
        />     }
    </ul>)

}

export default TaskUl;