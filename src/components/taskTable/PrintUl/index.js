import React, {useEffect, useState} from "react";
import TaskUl from "../TaskUl";
import TaskLi from "../TaskLi";
import {useSelector} from "react-redux";


const PrintUl = ({taskTree, deep = '', id = `root`, createTaskCB}) => {

    // let [tasksList, setTasksList] = useState(<></>)
    //
    //
    //
    // useEffect(() => {
    //     const arr = Object.keys(taskTree);
    //
    //     if (arr.length === 0) setTasksList(<></>);
    //     else {
    //         let listItems = arr.map((id) => {
    //             return <TaskUl key={id} tasks={taskTree[id]} deep={deep} id={id} createTaskCB={createTaskCB}/>
    //         })
    //
    //         setTasksList(listItems);
    //     }
    // })



    const arr = Object.keys(taskTree || {});
    if(arr.length === 0) return <></>;
    let tasksList = arr.map((id)=>{
        return <TaskUl key={id} tasks={taskTree[id]} deep={deep} id={id} createTaskCB={createTaskCB} />
    });


    return (<>
        {tasksList}

    </>)
}

export default PrintUl;


