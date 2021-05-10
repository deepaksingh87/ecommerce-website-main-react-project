import React from 'react'
import './SideBarContent.css';
import {AiFillHome,AiOutlineForm,AiOutlineLogin} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {FcAbout,FcContacts} from 'react-icons/fc';
import {BiNews} from 'react-icons/bi';
import {MdLocalMovies} from 'react-icons/md';
import {TiWeatherCloudy} from 'react-icons/ti';

export default function SideBarContent() {
    return (
        <div>
            <ul>
               <li> <img src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg" className="billgates-image"/></li>
                <li className="hmenu"></li>
                <li><Link className="inner-list" to="/" tag="a"><AiFillHome style={{color:"white",marginTop:"3px"}}/>Home</Link></li><hr/>
                <li><Link className="inner-list" to="/about" tag="a"><FcAbout style={{color:"white", marginTop:"3px"}}/>About</Link></li><hr/>
                <li><Link className="inner-list" to="/news" tag="a"><BiNews style={{color:"white" ,marginTop:"3px"}}/>News</Link></li><hr/>
                <li><Link className="inner-list" to="/contact" tag="a"><FcContacts style={{color:"white" ,marginTop:"3px"}}/>Contact</Link></li><hr/>
                <li><Link className="inner-list" to="/form" tag="a"><AiOutlineForm style={{color:"white" ,marginTop:"3px"}}/>Form</Link></li><hr/>
                <li><Link className="inner-list" to="/movies" tag="a"><MdLocalMovies style={{color:"white" ,marginTop:"3px"}}/>Movies</Link></li><hr/>
                <li><Link className="inner-list" to="/signin" tag="a"><AiOutlineLogin style={{color:"white" ,marginTop:"3px"}}/>SignIn</Link></li><hr/>
                <li><Link className="inner-list" to="/signup" tag="a"><MdLocalMovies style={{color:"white" ,marginTop:"3px"}}/>SignUp</Link></li><hr/>
                <li><Link className="inner-list" to="/weather" tag="a"><TiWeatherCloudy style={{color:"white" ,marginTop:"3px"}}/>Weather</Link></li><hr/>
              
            </ul>
        </div>
    )
}
