import React, { useEffect } from "react";

const User = (props) => {

    useEffect(()=> {
     console.log("Count is : " + props.Count);   
    },[props.Count, props.Data])
    
    return(
        <>
            <h1>Count : {props.Count}</h1>
            <h1>Data : {props.Data}</h1>
        </>
    );
};

export default User;