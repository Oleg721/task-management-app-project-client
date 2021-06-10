import {getUsers} from '../../../connect'
import React, {useEffect, useState} from "react";
import {connect, useDispatch}   from 'react-redux';
import {actionGetAllUsers, actionUserProjects} from "../../../actions";


const AddTaskUsers = ({users = [], taskUsers , serUsersCB : setTaskUsers})=>{
    // let [taskUsers, setTaskUsers] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(actionGetAllUsers())}, []);

    return (
        <div>
            <select onChange={event => setTaskUsers([...taskUsers, JSON.parse(event.target.value)])}>
                <option style={{color:"gray"}} key={-1} >select an executor</option>

                {users.filter(uniqueUser, taskUsers).map(({id, login}) => {
                    return (
                        <option key={id}value={`{"id" : "${id}", "login" : "${login}"}`}>{login}</option>
                    )
                })}
            </select>

            <div>
                {taskUsers.map(({login, id}) => {
                    return <span key={id}>{login}</span>
                })}
            </div>
        </div>
    )
}


function uniqueUser({id : userId}) {
    for(let {id} of this){
        if(userId === id ) return false
    }
    return true
}


export default connect(getUsers)(AddTaskUsers);