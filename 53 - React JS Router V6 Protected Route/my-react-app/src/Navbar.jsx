import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./App.css";

const Navbar = () => {
    return(
        <>
        <ul className="navbar">
            {/* <li><NavLink className="nav-bar-links" to="/" style={({isActive})=>{return{backgroundColor: "green"}}}>Home</NavLink></li> */}
            <li><NavLink className="nav-bar-links" to="/">Home</NavLink></li>
            <li><NavLink className="nav-bar-links" to="/about">About</NavLink></li>
            <li><NavLink className="nav-bar-links" to="/contact">Contact</NavLink></li>
            <li><NavLink className="nav-bar-links" to="/user/usman">Usman</NavLink></li>
            <li><NavLink className="nav-bar-links" to="/user/sufyan">Sufyan</NavLink></li>
            <li><NavLink className="nav-bar-links" to="/login">Login</NavLink></li>
        </ul>
        </>
    );
} 

export default Navbar;