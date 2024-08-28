import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Contact = () => {
    return(
        <>
        <h1>Contact Us Page</h1>
        <NavLink to="channel">Channel</NavLink>
        <NavLink to="company">Company</NavLink>
        <NavLink to="others">Others</NavLink>
        <Outlet/>
        </>
    );
}

export default Contact;