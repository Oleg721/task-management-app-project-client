import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionUpdateTask} from "../../../actions";


const TaskLi = ({ open,  task , deep, cbFunc=()=>{}, createTaskCB})=>{


    return (
        <li className="taskContainer" >
            <div className="taskName" >
                <span className="deep-children-task">{deep}</span>

                    {+task.countChildren ? <><span className="children-task-marker" onClick={cbFunc}>{open ? "-" : "+"}</span>
                                            {task.name}
                                            <span className="count-children-task">{task.countChildren}</span></>:
                                          <><span className="children-task-marker" style={{cursor:"default"}} ></span>
                                              {task.name}</>}
            </div>
            <div className="task-state"><TaskState state={task.state} task={task}/></div>
            <div className="task-start-date">{task.startDate}</div>
            <div className="task-end-date">{task.endDate}</div>
            <div className="task-user">Some User</div>
            <div className="task-buttons">
                <button onClick={()=>createTaskCB(task)}>create SubTask</button>
            </div>
        </li>)
}

const TaskState = ({state, task})=>{
    const dispatch =  useDispatch();


    return(<select className='state-select'
                    value={state}
                    onChange={(event => {
                        if(state === event.target.value)return;
                        dispatch(actionUpdateTask({...task, state : event.target.value}));})}
                    style={state === "ACTIVE" ?
                            {background: "#dc3545"}: state === "IN_WORK" ?
                            {background: "#0a58ca"} : {background:" #198754"} }
                    onFocus={(val)=>val.target.style.background = `75C3F7` }
                    >
        <option value="ACTIVE">Active</option>
        <option value="IN_WORK">In work</option>
        <option value="COMPLETED">Completed</option>
    </select>)
}



export default TaskLi;