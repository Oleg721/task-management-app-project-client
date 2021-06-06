import React, {useState} from "react";


const TaskLi = ({id, open,  task, deep, cbFunc=()=>{}})=>{
    console.log(`tchi++++++++++++++++`)
    console.log(task.children)
    return (
        <li className="taskContainer" >
            <div className="taskName" >
                <span className="deep-children-task">{deep}</span>
                <span className="children-task-marker" onClick={cbFunc}>
                    {open ? "-" : "+"}
                </span>
                {task.name}
            </div>
            <div className="task-state">{task.state}</div>
            <div className="task-start-date">{task.startDate}</div>
            <div className="task-end-date">{task.endDate}</div>
            <div className="task-user">Some User</div>
            <div className="task-buttons">
                <button>create SubTask</button>
            </div>
        </li>)
}

const MarkerSpan = (open)=>{
    useState()
}


export default TaskLi;