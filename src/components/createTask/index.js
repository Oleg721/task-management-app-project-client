import './index.css'
import React, {useEffect, useRef, useState} from "react";
import { useParams} from "react-router-dom"
import moment from "moment";
import AddTaskUsers from "./addTaskUsers";
import {useDispatch, useSelector}   from 'react-redux';
import {actionAddTask, actionCreateTask} from "../../actions";
import {actionPending} from "../../actions/actionPromise"
import {Redirect} from "react-router-dom";

const CreateTask = ({headerText = "create Project", id : subTaskId, createdEndCB})=>{
    let {id} = useParams()
    if(subTaskId) id = subTaskId;

    let [name, setName] = useState(``);
    let [description, setDescription] = useState(``);
    let [startDate, setStartDate] = useState(moment().format(`YYYY-MM-DD`));
    let [endDate, setEndDate] = useState(``);
    let [users, setUsers] = useState([])
    let [redirectedId, setRedirectedId] = useState(null)
    const dispatch = useDispatch();


    let createdTask = useSelector(state =>{
        if( state.promise.createTask?.status !== `RESOLVED`) return null;
            return state.promise.createTask.payload
    })

    useEffect(() => {
        if(createdTask) {
            dispatch(actionAddTask(createdTask))
            setRedirectedId(createdTask.id);
            createdEndCB && createdEndCB();
            dispatch(actionPending("createTask", null ))
        }
    });


return (
    <section className="create-task-section">
        {!createdEndCB && redirectedId && <Redirect to={`/project/${redirectedId}`}/>}
<header>
    <h3>{headerText}</h3>
</header>

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
      </div>
        <button className="button"
                disabled={moment(startDate) > moment(endDate)}
                onClick={()=>{
                    const task = {name : name,
                        description: description,
                        startDate: startDate,
                        endDate: endDate}
                    dispatch(actionCreateTask(task, users.map((user)=> user.id), id || null))
                } }
        >Create project</button>
<p className='create-task-message'>{moment(startDate) > moment(endDate) && `project start date cannot be greater than completion`}</p>

    </section>)
}

export default CreateTask;

