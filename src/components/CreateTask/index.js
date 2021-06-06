import './index.css'
import React, {useState} from "react";
import { useParams} from "react-router-dom"
import moment from "moment";
import AddTaskUsers from "./AddTaskUsers";

const CreateTask = ()=>{
    let {id} = useParams();
    let [name, setName] = useState(``);
    let [description, setDescription] = useState(``);
    let [startDate, setStartDate] = useState(moment().format(`YYYY-MM-DD`));
    let [endDate, setEndDate] = useState(``);


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
                  <textarea/>
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
          <AddTaskUsers/>



    <button
    disabled={moment(startDate) >= moment(endDate)}
    >Create project</button>

      </div>


<p >{moment(startDate) >= moment(endDate) && `project start date cannot be greater than completion`}</p>

    </section>)
}




export default CreateTask;