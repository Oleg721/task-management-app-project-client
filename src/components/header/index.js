import './index.css';

import React, { useState} from "react";
import store from "../../store";
import {actionAuthLogout} from "../../actions";
import {Link} from "react-router-dom";

const Header = ()=>{
    const [{id, login}, setLogin] = useState(store.getState().auth.payload ||  {id: null, login: null})


    return (
        <header className="header">
            <div className="header-welcomePanel">
                <span>hello {login}</span>
            </div>
            <button onClick={() => store.dispatch(actionAuthLogout()) }>Logout</button>
        </header>
    )
}

export default Header;