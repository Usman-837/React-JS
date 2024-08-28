import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./App.css";

const Navbar = () => {
    return(
        <>
        <ul className="navbar">
            {/* <li><NavLink className="nav-bar-links" to="/" style={({isActive})=>{return{backgroundColor: "green"}}}>Home</NavLink></li> */}
            <li><NavLink className="nav-bar-links" to="/" style={({isActive})=>{return{backgroundColor: isActive ? "green" : "red"}}}>Home</NavLink></li>
            <li><NavLink className="nav-bar-links" to="/about" style={({isActive})=>{return{backgroundColor: isActive ? "green" : "red"}}}>About</NavLink></li>
            <li><NavLink className="nav-bar-links" to="/contact" style={({isActive})=>{return{backgroundColor: isActive ? "green" : "red"}}}>Contact</NavLink></li>
            <li><NavLink className="nav-bar-links" to="/user/usman" style={({isActive})=>{return{backgroundColor: isActive ? "green" : "red"}}}>Usman</NavLink></li>
            <li><NavLink className="nav-bar-links" to="/user/sufyan" style={({isActive})=>{return{backgroundColor: isActive ? "green" : "red"}}}>Sufyan</NavLink></li>
        </ul>
        </>
    );
} 

export default Navbar;