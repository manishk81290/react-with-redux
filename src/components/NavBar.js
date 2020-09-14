import React from 'react';
import {NavLink, withRouter} from 'react-router-dom'; //Link is used when we dont want to get an active class on the link it is clicked.

const NavBar=(props)=>{
    console.log(props);
    // setTimeout(()=>{
    //     props.history.push('/about');
    // },5000);
    return(
        <nav className="navbar-wrapper darken-3">
            <a className="brand-logo">React App</a>
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/data">Data</NavLink></li>
                <li><NavLink to="/redux">Redux</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default withRouter(NavBar);