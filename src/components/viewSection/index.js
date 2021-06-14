import {Route, Switch} from "react-router-dom";
import CreateTask from "../createTask";
import TaskTable from "../taskTable";
import React from "react";
import AllUserProjects from "./AllUserProjects";
import MyTask from "./MyTask";


const ViewSection = ()=>{

    return (<section className='view-section'>

        <Switch>
            <Route exact path="/">
                <h1>YOU PROJECTS</h1>
<AllUserProjects/>
            </Route>
            <Route exact path="/create-task/">
                <CreateTask/>
            </Route>
            <Route exact path="/user-task">
                <h1>MY TASKS</h1>
                <MyTask/>
            </Route>
            <Route path={"/project/:id"}>
                <TaskTable/>
            </Route>
        </Switch>

    </section>)
}



export default ViewSection;