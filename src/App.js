import './App.css';
import SignUp from './components/authComponent/SignUp';
import SignIn from './components/authComponent/SignIn';
import TableTest from "./components/TableTest";
import Paperbase from "./pages/Paperbase";
import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";




function App() {
  return (
    <div className="App">

        <Router>
            <Switch>
                <Route path='/registration'>
                    <SignUp/>
                </Route>
                <Route exact path='/tab'>
                    <TableTest/>
                </Route>
                <Route path='/main'>
                    <Paperbase/>
                </Route>
                <Route path='/'>
                    <SignIn/>
                </Route>
            </Switch>
        </Router>

    </div>
  );
}

export default App;
