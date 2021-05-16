import './App.css';

import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import SignIn from "./components/authComponent/SignIn";
import {Provider, connect}   from 'react-redux';
import store from "./store/store";
import {actionUsers} from "./actions";
import Main from "./pages/main"

console.log(store.getState())
store.subscribe(()=> console.log(store.getState()))



function App() {
  return (
      <Provider store={store}>
        <div className="App">

            <Router>
                <Switch>
                    <Route path='/login'>
                        <SignIn/>
                    </Route>
                    <Route path='/registration'>
                        <SignIn/>
                    </Route>
                    <Route exact path='/tab'>

                    </Route>
                    <Route path='/main'>

                    </Route>
                    <Route path='/'>
                        <Main/>
                    </Route>
                </Switch>
            </Router>

        </div>
      </Provider>
  );
}

export default App;
