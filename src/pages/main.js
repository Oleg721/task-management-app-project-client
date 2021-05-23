import './main.css'

import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import store from "../store";
import {actionUsers, actionAuthLogin, actionGetAllUsers} from "../actions";
import Nav from "../components/nav";
import Header from "../components/header"



export default ()=> {

    const [userArr, setUserArr] = useState([]);

    useEffect(() => {
        let cleanupFunction = false;

        store.subscribe(() =>{
            if(store.getState().promise.getAllUsers?.status !== `RESOLVED`) return;
            if(!cleanupFunction) setUserArr(store.getState().promise.getAllUsers.payload)
        })
        return ()=> cleanupFunction = true;
},[])

    return (
        <div className="main">
            <Header/>
            <div className="wrap">
                <Nav/>
                <section>
                    <button onClick={()=>{
                        store.dispatch(actionGetAllUsers());
                    }}>GET ALL USERS</button>
                    <ul>
                        {userArr.map(({id, login}) => <li key={id}>id - {id} login {login}</li>)}
                    </ul>
                </section>
            </div>
        </div>
    )
}
