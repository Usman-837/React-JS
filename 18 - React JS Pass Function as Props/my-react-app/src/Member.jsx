import React from "react";

const Member = (props) => {
    return(
        <>
        <h1>Member Component</h1>
        <button onClick={props.data}>Get Data</button>
        </>
    );
};

export default Member;