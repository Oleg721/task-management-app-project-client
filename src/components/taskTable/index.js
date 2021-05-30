
import './index.css';
import {Provider, connect}   from 'react-redux';

import React, {useState} from "react";




const TaskTable = ({tasks})=>{
    return (
        <div className="table-test">
            <div className="taskContainer table-header">
                <div className="taskName">Task name</div>
                <div className="taskId">ID</div>
                <div className="taskDate">task Date</div>
            </div>
            <Print taskTree={tasks}/>
        </div>)
}



const TaskLi = ({id, task, deep, cbFunc=()=>{}})=>{
    return (
        <li className="taskContainer" onClick={cbFunc}>
            <div className="taskName">{`${deep} ${task.name}`}</div>
            <div className="taskId">{id}</div>
            <div className="taskDate">{`${task.date}`}</div>
        </li>)
}

const TaskUl = ({open = false, tasks, deep, id }) =>{

    const [state, setState] = useState(open);

    return (<ul >
        <TaskLi id={id} task={tasks} deep={deep} cbFunc={()=>{setState(!state)}} />

        {state && <Print taskTree={tasks.children}
                         deep={deep + `>`}
                         id={id+ `ul`}
                         cdFunc={()=>{}}/>}
    </ul>)

}


const Print =  ({taskTree, deep='', id=`root`, cdFunc}) => {


    deep = deep + `>`
    const arr = Object.keys(taskTree);
    if(arr.length === 0) return <></>;

    let listItems = arr.map((id)=>{
        return <TaskUl key={id} tasks={taskTree[id]} deep={deep} id={id} />
    });

    return (<>
        {listItems}

    </>)
}



const mapStateToProps = (state, ownProps) => {
    console.log(state)
    console.log(ownProps)
    return {tasks : state.tasks}
}

const CTestComponent = connect(mapStateToProps)(TaskTable)


export default CTestComponent;
