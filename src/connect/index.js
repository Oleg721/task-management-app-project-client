
import React from 'react';
import store from "../store";



export function getUsers(state){
    if(store.getState().promise.getAllUsers?.status !== `RESOLVED`) return {}
    return {users : state.promise.getAllUsers?.payload || [] }
};


export function getUserProject(state){
    const arr = [];
    const tasks = state.tasks;
    for(let key in tasks){
        arr.push(tasks[key]);
    }
    return {userProjects : arr}

};


export const getTasks = (state, ownProps) => {

    return {tasks : state.tasks}
}

