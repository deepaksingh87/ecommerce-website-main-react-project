import React from 'react'
import {FiMenu} from 'react-icons/fi';
import {BsSearch} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import "./Header.css";

export default function Header(props) {
    return (
        <div className="header">
            <ul style={{listStyleType:"none",display:"flex",position:"relative",top:"0"}}>
            <li onClick={props.onClick}><FiMenu style={{fontSize:"50px"}}/></li>
            <li className="search-item"><input type="search" placeholder="enter search item"/></li>
            <li><BsSearch style={{fontSize:"35px",marginTop:"10px",marginLeft:"10px"}}/></li>
            <li><Link to="/signin"><button className="login-list">Login</button></Link></li>
            <li><Link to="/signup"><button className="login-list1">Signup</button></Link></li>
            </ul>

        </div>
    )
}
