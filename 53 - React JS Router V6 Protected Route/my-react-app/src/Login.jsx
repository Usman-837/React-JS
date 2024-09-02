import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const login = () => {
        localStorage.setItem("login", true);
        navigate('/')
    }

    useEffect(()=> {
        let login = localStorage.getItem("login");
        if (login) {
            navigate("/")
        }
    });

    return(
        <>
            <h1>Login Page</h1>
            <input type="email" placeholder="enter your email"/><br/><br/>
            <input type="password" placeholder="enter password"/><br/><br/>
            <button onClick={login}>Login</button>
        </>
    );
}

export default Login;