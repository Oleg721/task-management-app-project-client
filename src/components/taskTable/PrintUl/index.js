import React from "react";
import TaskUl from "../TaskUl";

const PrintUl =  ({taskTree, deep='', id=`root`, cdFunc}) => {


    const arr = Object.keys(taskTree);
    if(arr.length === 0) return <></>;

    let listItems = arr.map((id)=>{
        return <TaskUl key={id} tasks={taskTree[id]} deep={deep} id={id} />
    });
    deep = deep + `>>`
    return (<>
        {listItems}

    </>)
}

export default PrintUl;