import './index.css';
import store from "../../store";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {connect}   from 'react-redux';
import {actionUserProjects} from '../../actions'
import {getUserProject} from '../../connect'

const Nav = ({userProjects})=>{

   // useState(() => {store.dispatch(actionUserProjects())}, []);

    return(
        <nav className="nav">
            <hr/>
            <div className="nav-create-task-btn">
                <Link to="/create-task">Create project</Link>
            </div>

            <div className="nav-projects">
                <span>PROJECTS</span>
                <ul>
                    {userProjects?.map((val) => {
                        return <li key={val.id}><Link to={`/project/${val.id}`}>{val.name}</Link></li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

const CNav = connect(getUserProject)(Nav)


export default CNav;

