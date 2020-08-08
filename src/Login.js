import React, { useState } from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            //Logged in successfully
            console.log(auth);
        }).catch((e) => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => alert('success')).catch((e) => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    alt=""
                    src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="login__singinButton" type="submit" onClick={login}>Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. 
                </p>
                <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
