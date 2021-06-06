import './main.css'

import React, {useEffect, useState} from 'react';
import store from "../store";
import {actionGetAllUsers, actionUserProjects} from "../actions";
import Nav from "../components/nav";
import Header from "../components/header"
import {connect}   from 'react-redux';
import {getUsers} from "../connect";
import TaskTable from '../components/taskTable'
import CreateTask from "../components/CreateTask";
import {BrowserRouter as Router, Switch, Route, Link, Redirect, useParams} from "react-router-dom";

const MainPage = ()=> {


    return (
        <div className="main">
            <Header/>
            <Route>
            <div className="wrap">
                <Nav/>
                <section className='view-section'>

                        <Switch>
                            <Route exact path="/">
                                <h1>ALL PROJECTS AND CREATE PROJECT</h1>
                            </Route>
                            <Route exact path="/create-task/:id">
                                <CreateTask/>
                            </Route>
                            <Route exact path="/create-task/">
                                <CreateTask/>
                            </Route>
                            <Route path={"/project/:id"}>
                                <TestH1/>
                                <TaskTable/>
                            </Route>
                        </Switch>

                </section>
            </div>
            </Route>
        </div>
    )
}


const TestH1 = ()=> {
    let {id} = useParams();
    return ( <h1>TABLE TASK - {id}</h1>)
}


const TestButton = ({users})=>{
    return(
        <div>
            <button onClick={()=>{
                store.dispatch(actionGetAllUsers());
            }}>GET ALL USERS</button>
            <ul>
                {users?.map(({id, login}) => <li key={id}>id - {id} login {login}</li>)}
            </ul>
        </div>
    )
}

const CTestButton = connect(getUsers)(TestButton)

// function userMapSet(state){
//     if(store.getState().promise.getAllUsers?.status !== `RESOLVED`) return {}
//     return {users : state.promise.getAllUsers?.payload || [] }
// };

export default MainPage;