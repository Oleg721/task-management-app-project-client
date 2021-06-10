import './index.css'
import React, {useEffect, useRef, useState} from "react";
import { useParams} from "react-router-dom"
import moment from "moment";
import AddTaskUsers from "./AddTaskUsers";
import {useDispatch, useSelector}   from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import {actionAddChildrenTask, actionAddTask, actionCreateTask} from "../../actions";
import {connect}   from 'react-redux';

const CreateTask = ()=>{
    let {id} = useParams();
    let [name, setName] = useState(``);
    let [description, setDescription] = useState(``);
    let [startDate, setStartDate] = useState(moment().format(`YYYY-MM-DD`));
    let [endDate, setEndDate] = useState(``);
    let [users, setUsers] = useState([])
    const taskRef = useRef({id : null})
    const dispatch = useDispatch();

    console.log(`USE`);


    let createdTask = useSelector(state =>{
        if( state.promise.createTask?.status !== `RESOLVED`) return null;
            return state.promise.createTask.payload

    })



useEffect(() => {
    console.log(createdTask)
    console.log(taskRef)
    if(createdTask && (createdTask.id !== taskRef.current.id) ) {
        dispatch(actionAddTask(createdTask))
        taskRef.current.id = createdTask.id;
    }
})



 //   {createdTask && <Redirect to={`/project/${createdTask.id}`}/>}

return (
    <section className="create-task-section">


      <div className="create-task-fields">
          <div>
              <div className="create-task-col-1">
                  <label>Name</label>
              </div>
              <div className="create-task-col-2">
                  <input type="text"
                         value={name}
                         onChange={event => setName(event.target.value)}/>
              </div>
          </div>


          <div>
              <div className="create-task-col-1">
                  <label>Description</label>
              </div>
              <div className="create-task-col-2">
                  <textarea value={description}
                            onChange={event=> setDescription(event.target.value)}/>
              </div>
          </div>


          <div>
              <div className="create-task-col-1">
                  <label>project start date</label>
              </div>
              <div className="create-task-col-2">
                  <input type="date"
                         value={startDate}
                         onChange={event => setStartDate(event.target.value)}
                         min={moment().format(`YYYY-MM-DD`)}
                  />
              </div>
          </div>


          <div>
              <div className="create-task-col-1">
                  <label>project end date</label>
              </div>

              <div className="create-task-col-2">
                  <input type="date"
                         onChange={event => setEndDate(event.target.value)}
                         min={moment().format(`YYYY-MM-DD`)}
                  />
              </div>
          </div>
          <AddTaskUsers serUsersCB ={(users)=>setUsers(users)} taskUsers={users}/>



    <button
    disabled={moment(startDate) > moment(endDate)}
    onClick={()=>{
        const task = {name : name,
                        description: description,
                        startDate: startDate,
                        endDate: endDate}
        dispatch(actionCreateTask(task, users.map((user)=> user.id), null))
    } }
    >Create project</button>

      </div>

<p >{moment(startDate) > moment(endDate) && `project start date cannot be greater than completion`}</p>

    </section>)
}
/*let CCreateTask = connect(initialState => {
    console.log(initialState.promise);
    if( initialState.promise.createTask?.status !== `RESOLVED`) return {createdTask: null};
    return {createdTask: initialState.promise.createTask.payload}
})(CreateTask);*/

export default CreateTask;

