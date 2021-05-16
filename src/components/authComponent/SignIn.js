import './SignIn.css'
import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import {actionLogin} from '../../actions'
import store from "../../store/store"





export default function SignIn() {


    return (
        <div className="signIn">
            <div className="login-page">
                <div className="form">
                    <Router>
                        <Switch>
                            <Route exact path="/login">
                                <LoginForm action = {(login, password)=>store.dispatch(actionLogin(login,password))}
                                           passwordValidator={passwordValidator}/>
                            </Route>
                            <Route exact path="/registration">
                                <RegisterForm/>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>

        </div>
    )

}



const RegisterForm = ({action})=>{
    const [login, setLogin] = useState(``);
    const [name, setName] = useState(``);
    const [password, setPassword] = useState(``);
    const [verifyPassword, setVerifyPassword] = useState(``);



    return (
        <div className="register-form">
            <h3>SignUp</h3>
            <input type="text"
                   placeholder="login"
                   onChange={(event)=>setLogin(event.target.value)} />
            <input type="text"
                   placeholder="name"
                   onChange={(event)=>setName(event.target.value)} />
            <PasswordInput setText={setPassword} placeholderText="Password"/>
            <PasswordInput setText={setVerifyPassword} placeholderText="Repeat password"/>

            <button disabled={ !login.length|| (password !== verifyPassword) || !passwordValidator(password)}
                    onClick={()=>action({login:login, password: password})}>
                create
            </button>
            <p className="message">Already registered?
                <Link to='/login'>Sign In</Link>
            </p>
        </div>
    )
}


const LoginForm = ({action, passwordValidator})=>{
    const [login, setLogin] = useState(``);
    const [password, setPassword] = useState(``);


    return (
        <div className="login-form">
            <h3>SignIn</h3>

            <input type="text"
                   placeholder="login"
                   onChange={(event)=>setLogin(event.target.value)} />
            <PasswordInput setText={setPassword} placeholderText="Password"/>

            <button disabled={ !login.length || !passwordValidator(password)}
                onClick={()=>action(login, password)} >login</button>

            <p className="message">Not registered?
                <Link to="/registration">Create an account</Link>
            </p>
        </div>
    )
}


const PasswordInput = ({setText, placeholderText}) => {

    return <input type="password"
                  placeholder={placeholderText}
                  autoComplete="new-password"
                  onChange={(e) => setText(e.target.value)}

    />
}


const ValidateInfoSpan = ({text, min, val = () => true}) => {
    return <span style={{color: text.length < min && "red", visibility: text.length >= min && val(text) && `hidden`}}>
                                 {text.length < min ? "length is short" : !val(text) && "not valid password"}
        </span>
}

function passwordValidator(validationText){
    return !!(validationText.toString().length >= 8)
}