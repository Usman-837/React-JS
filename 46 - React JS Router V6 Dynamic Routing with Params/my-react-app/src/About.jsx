import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return(
        <>
        <h1>About Page</h1>
        <p>This is an Home Page</p>
        <p>And Here we are learning about Router V6</p>
        <Link to="/">Go to Home Page</Link><br/>
        <Link to="/user/usman">Usman</Link><br/>
        <Link to="/user/sufyan">Sufyan</Link>
        </>
    );
}

export default About;