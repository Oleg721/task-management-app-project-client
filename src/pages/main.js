import './main.css'

import React, {useEffect, useState} from 'react';
import store from "../store";
import {actionUsers, actionAuthLogin, actionGetAllUsers} from "../actions";
import Nav from "../components/nav";
import Header from "../components/header"
import {Provider, connect}   from 'react-redux';




const Users = ({users})=> {

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
                        {users?.map(({id, login}) => <li key={id}>id - {id} login {login}</li>)}
                    </ul>
                </section>
            </div>
        </div>
    )
}



const CUsers = connect(userMapSet)(Users)
function userMapSet(state){
    if(store.getState().promise.getAllUsers?.status !== `RESOLVED`) return {}
    return {users : state.promise.getAllUsers?.payload || [] }
};

export default CUsers;