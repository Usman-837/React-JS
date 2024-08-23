import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return(
        <>
        <h1>About Page</h1>
        <p>This is an Home Page</p>
        <p>And Here we are learning about Router V6</p>
        <Link to="/about">Go to Home Page</Link>
        </>
    );
}

export default About;