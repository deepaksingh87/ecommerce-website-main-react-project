import React from 'react';
import './login.css';
import Home from '../component/Home';
import {Link} from 'react-router-dom';

function formHandles(e){
e.preventDefault();
if(e.target.user1.value=="deepak" && e.target.pass.value==="12345"){
    alert("Login Successfully");
}
else{
    alert("unsuccessfully login")
}
}
export default function SignIn() {
    return (
        
            <form onSubmit={formHandles}>
            <div className="login-form">
            <div className="inner-form-login">
               <label>UserName:</label><span><input type="text" className="login-input" name="user1"/></span>
                <label>Password:<input type="password" style={{marginTop:"40px",marginLeft:"10px"}} name="pass"/></label>
                <br/><br/>
                <button type="submit" className="inner-button">log In</button>
               <Link to="/signup"><button type="submit" className="inner-button1">SignUp</button></Link>
                </div>
                </div>
            </form>
        
    )
}
