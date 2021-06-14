import './index.css'
import {getUserProject} from '../../../connect'
import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const AllUserProjects = () => {
    const {userProjects} = useSelector(getUserProject);
    console.log(userProjects)
    return (<ul className="all-user-projects">
        {userProjects.map(({id, name, state, startDate, endDate}) => {
            return <li key={id}>
                    <Link to={`/project/${id}`}>
                        <TableProject name={name}
                                      state={state}
                                      startDate={startDate}
                                      endDate={endDate} />
                    </Link>
                    </li>
        })}
    </ul>)
}

let TableProject = ({name, state, startDate, endDate}) => {
    return (<table className="project-table">
        <thead>
        <tr>
            <td colSpan='2'>{name}</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>state:</td>
            <td>{state}</td>
        </tr>
        <tr>
            <td>start date:</td>
            <td>{startDate}</td>
        </tr>
        <tr>
            <td>end date:</td>
            <td>{endDate}</td>
        </tr>
        </tbody>
    </table>)
}

export default AllUserProjects;