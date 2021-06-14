import './main.css'
import React, {useEffect, useState} from 'react';
import Nav from "../components/nav";
import Header from "../components/header"
import ViewSection from "../components/viewSection";
import {Route} from "react-router-dom";

const MainPage = ()=> {


    return (
        <div className="main">
            <Header/>
            <Route>
            <div className="wrap">
                <Nav/>
                <ViewSection/>
            </div>
            </Route>
        </div>
    )
}


export default MainPage;