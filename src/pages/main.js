import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import store from "../store/store";
import {actionUsers, actionAuthLogin} from "../actions";



export default ()=> {



    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userArr, setUserArr] = useState([]);

    store.subscribe(() =>{
        {console.log(`=================`)}
        {console.log(store.getState())}
        if(store.getState().promise.getAllUsers?.status !== `RESOLVED`)return;

        setUserArr(store.getState().promise.getAllUsers.payload)

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