import React from 'react'
import {Link} from 'react-router-dom';
function formHandling(e){
    e.preventDefault();
    let user=e.target.user.value;
    let passwd=e.target.pass.value;
    let passwd1=e.target.pass1.value;
    if(user!=null && passwd===passwd1 && passwd.length>4){
        alert("successfully sign up")
    }
    else{
        alert("form not submitted")
    }
}
export default function SignUp() {
    return (
        <form onSubmit={formHandling}>
        <div className="login-form">
        <div className="inner-form-login">
           <label>UserName:</label><span><input type="text" className="login-input" name="user"/></span>
            <label>Password:<input type="password" style={{marginTop:"40px",marginLeft:"10px"}} name="pass"/></label>
            <label>Confirm:<input type="password" style={{marginTop:"40px",marginLeft:"20px"}} name="pass1"/></label>
            <br/><br/>
            <Link to="/signin"><button type="submit" className="inner1-button">log In</button></Link>
            <button type="submit" className="inner2-button1">SignUp</button>
            </div>
            </div>
        </form>
    )
}
