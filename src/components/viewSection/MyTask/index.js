import './index.css'
import React, {useEffect, useState} from "react";
import TaskLi from "../../taskTable/TaskLi";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const MyTask = ()=>{

    let userTasksPromise = useSelector(state => {
        if( state.promise.usersTask?.status !== `RESOLVED`) return null;
        return state.promise.usersTask.payload
    })

    let [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(userTasksPromise || [])
    }, [userTasksPromise])

    return (<ul className="my-tasks">
        {tasks.map(({name, state, startDate, endDate}) => {
            return <li>
                <span className='my-task-name'>{name}</span>
                <span>{state}</span>
                <span>{startDate}</span>
                <span>{endDate}</span>
            </li>
        })}
    </ul>)
}

export default MyTask;