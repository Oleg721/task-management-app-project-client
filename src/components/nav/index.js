import './index.css';

import React, {useEffect, useState} from "react";
import store from "../../store";
import {Link} from "react-router-dom";

const Nav = ()=>{
    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        let cleanupFunction = false;
        store.subscribe(()=>{
            if(!store.getState().promise.userProjects) return;
            if(store.getState().promise.userProjects.status !== `RESOLVED`) return;

            if(!cleanupFunction)setProjects(store.getState().promise.userProjects.payload);
        })
            return ()=> cleanupFunction = true;
    },[])



    return(
        <nav className="nav">
            <hr/>
            <div className="nav-projects">

                <span>PROJECTS</span>
                <ul>
                    {projects.map((val) => {
                        return <li key={val.id}><Link to="/project">{val.name}</Link></li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Nav;

