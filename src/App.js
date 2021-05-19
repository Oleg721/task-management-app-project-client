import './App.css';

import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import SignIn from "./components/authComponent/SignIn";
import {Provider, connect}   from 'react-redux';
import store from "./store/store";
import {actionAuthLogin, actionUsers, actionVerifyToken} from "./actions";
import Main from "./pages/main"
import {authByLocalStorage} from "./utility";

console.log(store.getState())
store.subscribe(()=> console.log(store.getState()))

//СДЕЛАТЬ САНК ДЛЯ входа в систему по токену




function App() {

    const[{id, nickName}, setUser] = useState(store.getState().auth?.payload || {id: null, nickName: null})

authByLocalStorage((val)=>setUser(val))


  return (
      <Provider store={store}>
        <div className="App">

            <Router>
                {id && nickName && <Redirect to="/"/> }
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
                        {console.log(nickName,id)}
                        {(id && nickName) ?
                            <Main/> :
                        <Redirect to='login'/>}


                    </Route>
                </Switch>
            </Router>

        </div>
      </Provider>
  );
}

export default App;
