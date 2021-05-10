import React from 'react'
import Sidebars from './Sidebar/Sidebars';
import  {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './component/Home'
import Header from './Sidebar/Header';
import About from './component/About';
import Contact from './component/Contact';
import News from './NewsComponent/News';
import Form from './component/Form';
import Movies from './component/Movies';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';
import Weather from './component/Weather';
import './App.css';
export default function App() {
    return (
        <div>
            <Router>
            <Header/>
            <Sidebars/>
            <Route path='/' component={Home} exact/>
            <Route path='/about' component={About} exact/>
            <Route path='/contact' component={Contact} exact/>
            <Route path='/news' component={News} exact/>
            <Route path='/form' component={Form} exact/>
            <Route path='/movies' component={Movies} exact/>
            <Route path='/signin' component={SignIn} exact/>
            <Route path='/signup' component={SignUp} exact/>
            <Route path='/weather' component={Weather} exact/>
            </Router>
        </div>
    )
}
