import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
        <h1>Home Page</h1>
        <p>This is an Home Page</p>
        <p>And Here we are learning about Router V6</p>
        <Link to="/about">Go to About Page</Link>
        </>
    );
}

export default Home;