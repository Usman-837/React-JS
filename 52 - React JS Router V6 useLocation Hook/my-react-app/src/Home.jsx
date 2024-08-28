import React from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    console.log(location);

    return(
        <>
        <h1>Home Page</h1>
        <p>This is an Home Page</p>
        <p>And Here we are learning about Router V6</p>
        <Link to="/about" state={{name: "Usman Tufail"}}>Go to About Page</Link>
        </>
    );
}

export default Home;