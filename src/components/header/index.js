import './index.css';

import React, { useState} from "react";
import store from "../../store";
import {actionAuthLogout} from "../../actions";
import {connect}   from 'react-redux';

const Header = ({user : {login}})=>{

        return (
        <header className="header">
            <div className="header-welcomePanel">
                <span>hello {login}</span>
            </div>
            <button className="button" onClick={() => store.dispatch(actionAuthLogout()) }>Logout</button>
        </header>
    )
}



const CHeader = connect(mapSet)(Header)

function mapSet(state){
    return {user :  state.auth.payload }

};

export default CHeader;