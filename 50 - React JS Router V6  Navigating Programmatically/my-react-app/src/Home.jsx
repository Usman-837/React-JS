import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    // const navToPage = () => {
    //     let x = true;
    //     if(x){
    //         navigate("/about")
    //     }
    //     else{
    //         navigate("/user")
    //     }
    // }

    const navToPage = (url) => {
        navigate(url);
    }

    return(
        <>
        <h1>Home Page</h1>
        <p>This is an Home Page</p>
        <p>And Here we are learning about Router V6</p>
        <Link to="/about">Go to About Page</Link><br/><br/>
        {/* <button onClick={()=>navToPage("/about")}>Go to About Page</button><br/><br/>
        <button onClick={()=>navToPage("/user")}>Go to User Page</button><br/><br/> */}
        {/* <button onClick={()=>navToPage()}>Go to About Page</button><br/><br/>
        <button onClick={()=>navToPage()}>Go to User Page</button><br/><br/> */}
        <button onClick={()=>navToPage("/about")}>Go to About Page</button><br/><br/>
        <button onClick={()=>navToPage("/page404")}>Go to User Page</button>
        </>
    );
}

export default Home;