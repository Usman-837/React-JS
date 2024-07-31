import React from "react";

const User = (props) => {
    return(
        <>
        <h1>Pass Function as Props</h1>
        <button onClick={props.data}>Get Data</button>
        </>
    );
};

export default User;