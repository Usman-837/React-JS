import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <ul>
            {/* <li><a href="/about">About</a></li>
            <li><a href="/">Home</a></li> */}

            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Home</Link></li>
        </ul>
        </>
    );
} 

export default Navbar;