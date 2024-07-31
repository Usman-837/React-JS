import React, { useState } from "react";

const Login = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    const formHandler = (e) => {
        if(user.length < 3 || password.length < 3)
        {
            alert("Put Correct Value");
        }
        else{
            alert("Login Successfully");
        }
        e.preventDefault();
    };

    const userHandler = (e) => {
        let item = e.target.value;
        if(item.length < 3)
        {
            setUserErr(true);
        }
        else
        {
            setUserErr(false);
        }
        setUser(item);
        console.log(e.target.value);
    };

    const passwordHandler = (e) => {
        let item = e.target.value;
        if(item.length < 3)
        {
            setPasswordErr(true);
        }
        else
        {
            setPasswordErr(false);
        }
        setPassword(item);
    };

    return(
        <>
        <h1>Login</h1>
        <form onSubmit={formHandler}>
            <input type="text" placeholder="Enter name" onChange={userHandler}/>{userErr?<span>Invalid User</span>:null}<br/><br/>
            <input type="password" placeholder="Enter password" onChange={passwordHandler}/>{passwordErr?<span>Invalid Password</span>:null}<br/><br/>
            <button type="submit">Loging</button>
        </form>
        </>
    );
};

export default Login;