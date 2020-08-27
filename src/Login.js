import React, { useState } from 'react'
import './Login.css'
import { auth , firebase } from './firebase';
import { Link , useHistory } from 'react-router-dom'

function Login() {
    const history = useHistory();
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const login = e => 
{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((auth)=>{
history.push("/");

    }).catch(e =>alert(e.message));
}

const register = e => 
{
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
.then(auth => {
    history.push("/");
}).catch(e =>alert(e.message));
}


    return (
        <div className="login">
        <Link to="/">
            <img 
             src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt="AMAZON"
            className="login__logo"
            
            
            />
        <h2>HAMMAD</h2>
        </Link>
<div className="login__container">
<h1>Sign in</h1>
<form>
    <h5>E-mail</h5>
    <input onChange={e=> setEmail(e.target.value)} value={email} type="text" />
    <h5>Password</h5>
    <input onChange={e => setPassword(e.target.value)} value={password} type="password" />
<button  onClick={login} type="submit" className="login__signInButton">Sign In</button>
</form>
<p>
    By signing in you agree to Amazon Conditions
</p>
<button onClick={register} className="login__registerButton" >Create Your Amazon Account</button>
</div>
        </div>

    )
}

export default Login
