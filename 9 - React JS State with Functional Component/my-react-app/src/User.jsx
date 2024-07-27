import React, { useState } from "react";

const User = () => {
    const [data, setData] = useState(0);
    
    function updateData() {   
        {
            // data="Tufail";
            // setData("Tufail");
            setData(data+1);
        }
    }
    console.warn("_______");

    return(
        <>
        <h1>{data}</h1>
        {/* <button onClick={updateData}>Update Data</button> */}
        <button onClick={updateData}>Update Data</button>
        </>
    );
};

export default User;