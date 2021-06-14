import './index.css';
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {connect}   from 'react-redux';
import { actionGetUserTask} from '../../actions'
import {getUserProject} from '../../connect'
import {useDispatch} from "react-redux";



const Nav = ({userProjects})=>{
    const dispatch = useDispatch();
    return(
        <nav className="nav">

<section className="button-section">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/create-task" className="nav-button">Create project</Link>
        <Link onClick={()=>dispatch(actionGetUserTask()) } to="/user-task" className="nav-button">My task</Link>
</section>
            <hr/>
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

