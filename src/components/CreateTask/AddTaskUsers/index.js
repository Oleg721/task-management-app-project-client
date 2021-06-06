import {getUsers} from '../../../connect'
import React, {useEffect, useState} from "react";
import {connect}   from 'react-redux';
import store from "../../../store";
import {actionGetAllUsers, actionUserProjects} from "../../../actions";

const AddTaskUsers = ({users = []})=>{
    let [taskUsers, setTaskUsers] = useState([]);
    useEffect(() => {
        store.dispatch(actionGetAllUsers())}, []);

    function uniqueUser({id : userId}) {
        for(let {id} of taskUsers){
            console.log(id)
            console.log(userId)
            if(userId === id ) return false
        }
      //  console.log(val)
        return true
    }

    return (
        <div>
            <select onChange={
                            event => setTaskUsers([...taskUsers, JSON.parse(event.target.value)])}>
                <option style={{color:"gray"}} key={-1} >select an executor</option>
                {users.filter(uniqueUser).map(({id, login}) => {
                    return (
                        <option key={id}
                                value={JSON.stringify({id, login})}
                        >{login}</option>
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




export default connect(getUsers)(AddTaskUsers);