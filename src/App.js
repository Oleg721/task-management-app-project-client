import './App.css';

import React, {useState,} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import SignIn from "./components/authComponent/SignIn";
import {Provider, connect}   from 'react-redux';
import store from "./store";
import {actionAuthLogin, actionUsers, actionVerifyToken} from "./actions";
import Main from "./pages/main"


console.log(store.getState())
store.subscribe(()=> console.log(store.getState()))


{if(window.localStorage.authToken){store.dispatch(actionAuthLogin(window.localStorage.authToken))}}



function App() {

    const[{id, login}, setUser] = useState(store.getState().auth?.payload || {id: null, login: null})


    const unsubscribeAut = store.subscribe(() =>{
        if(!store.getState().auth.payload) {
            setUser({id: null, login: null})
        } else
        setUser(store.getState().auth.payload);
    })


  return (
      <Provider store={store}>
        <div className="App">

            <Router>
                {id && login && <Redirect to="/"/> }
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

                      {console.log(login,id)}
                        {(id && login) ?
                            <Main/> :
                        <Redirect to='/login'/>}


                    </Route>
                </Switch>
            </Router>

        </div>
      </Provider>
  );
}

export default App;
