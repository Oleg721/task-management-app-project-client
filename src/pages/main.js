import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import store from "../store/store";
import {actionUsers} from "../actions";


export default ()=> {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userArr, serUserArr] = useState([]);

    store.subscribe(() =>{

        if(store.getState().promise.getAllUsers?.status !== `RESOLVED`)return;
        console.log(`=================`)
        console.log(store.getState().promise.getAllUsers.payload)
        serUserArr(store.getState().promise.getAllUsers.payload)

    })

    return (
        <>
            <button onClick={()=>{
                store.dispatch(actionUsers());
            }}>GET ALL USERS</button>

            <ul>
                {userArr.map(({id, nickName}) => <li key={id}>id - {id} nickName {nickName}</li>)}
            </ul>
        </>
    )
}