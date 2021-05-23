import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import store from "../store";
import {actionUsers, actionAuthLogin, actionGetAllUsers} from "../actions";



export default ()=> {



    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userArr, setUserArr] = useState([]);

    store.subscribe(() =>{
        if(store.getState().promise.getAllUsers?.status !== `RESOLVED`)return;

        setUserArr(store.getState().promise.getAllUsers.payload)

    })

    return (
        <>
            <button onClick={()=>{
                store.dispatch(actionGetAllUsers());
            }}>GET ALL USERS</button>
            <ul>
                {userArr.map(({id, nickName}) => <li key={id}>id - {id} nickName {nickName}</li>)}
            </ul>
        </>
    )
}
