import React, {useState} from "react";
import TaskLi from "../TaskLi";
import store from "../../../store";
import {actionAddChildrenTask} from "../../../actions";
import PrintUl from "../PrintUl";

const TaskUl = ({open = false, tasks, deep, id }) =>{

    const [state, setState] = useState(open);

    return (<ul >
        <TaskLi id={id}
                open={state}
                task={tasks}
                deep={deep}
                cbFunc={()=>{

            store.dispatch(actionAddChildrenTask({id:id}));
            setState(!state)
        }} />

        {state && <PrintUl taskTree={tasks.children}
                           deep={deep + `>>`}
                           id={id+ `ul`}
                           cdFunc={()=>{}}/>}
    </ul>)

}

export default TaskUl;