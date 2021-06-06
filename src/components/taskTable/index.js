
import './index.css';
import {getTasks} from '../../connect';
import React, {useState} from "react";
import {connect}   from 'react-redux';
import PrintUl from "./PrintUl/index";


const TaskTable = ({tasks})=>{
    return (
        <div className="task-table">
            <div className="taskContainer table-header">
                <div className="taskName">Task name</div>
                <div className="task-state">state</div>
                <div className="task-start-date">start date</div>
                <div className="task-end-date">end date</div>
                <div className="task-user">Users</div>
                <div className="task-buttons"></div>
            </div>
            <div className="table-body">
                <PrintUl taskTree={tasks}/>
            </div>
        </div>)
}


const CTestComponent = connect(getTasks)(TaskTable)

export default CTestComponent;

// <div className="taskName">{`${deep} ${task.name}`}</div>
// <div className="task-state">{task.state}</div>
// {/* <div className="taskId">{id}</div>*/}
// <div className="task-start-date">{task.startDate}</div>
// <div className="task-end-date">{task.endDate}</div>