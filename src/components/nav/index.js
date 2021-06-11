import './index.css';
import store from "../../store";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {connect}   from 'react-redux';
import {actionUserProjects} from '../../actions'
import {getUserProject} from '../../connect'

const Nav = ({userProjects})=>{

    // let [users, setUsers] = useState(userProjects);
    //
    // useEffect(() => setUsers(userProjects), [userProjects]);
   // useState(() => {store.dispatch(actionUserProjects())}, []);

    return(
        <nav className="nav">

<section className="button-section">
        <Link to="/create-task" className="nav-button">Create project</Link>
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

