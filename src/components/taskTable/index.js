
import './index.css';
import React, {useEffect, useState} from "react";
import {connect, useSelector}   from 'react-redux';
import PrintUl from "./PrintUl/index";
import {Route, useParams} from "react-router-dom";
import store from "../../store";
import {actionAddChildrenTask} from "../../actions";
import CreateTask from "../createTask";

const TaskTable = ()=>{

    const tasks = useSelector((state)=>{
        return state.tasks;
    });

     const {id} = useParams()
     let [createdTask, setCreatedTask] = useState(null);
     let [projectTasks, setProjectTasks ] = useState([])

    useEffect(()=> {
        setProjectTasks(tasks[id]?.children);
                    },[tasks, id])
    useEffect(()=> {
        setCreatedTask(null)
        store.dispatch(actionAddChildrenTask({id:id}))},[id])


    return (
<>
    <h3>Task {tasks[id]?.name || 0}</h3>
    <div style={createdTask ? {display : `none`} : {display : `initial`} } className="task-table">
        <div className="taskContainer table-header">
            <div className="taskName">Task name</div>
            <div className="task-state">state</div>
            <div className="task-start-date">start date</div>
            <div className="task-end-date">end date</div>
            <div className="task-user">Users</div>
            <div className="task-buttons"></div>
        </div>
        <div className="table-body">
            <PrintUl taskTree={projectTasks}

                     createTaskCB={(val)=>setCreatedTask(val)}/>
            <div className="taskContainer add-task-btn"
                 onClick={()=> setCreatedTask(tasks[id]) } >
                Create tasks...</div>
        </div>
    </div>
    {createdTask && <CreateTask headerText={!createdTask.path.match(/^\/[0-9]+\/[0-9]+$/) ? `Create task in project - ${createdTask.name}` :
                                                                                        `Create sub task `}
                                id={createdTask.id}
                                createdEndCB={()=>setCreatedTask(null)}/>}
</>
    )}



export default TaskTable;

