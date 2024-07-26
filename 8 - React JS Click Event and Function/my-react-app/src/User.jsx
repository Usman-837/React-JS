import React from "react";

const User = () => {

    function apple() {
        return(
            alert("Function Call")
        );        
    }

    return(
        <>
        <h1>Hello World</h1>
        {/* <button onClick={alert("Usman")}>Click Me</button> */}
        {/* <button onClick={Apple}>Click Me</button> */}
        {/* <button onClick={Apple()}>Click Me</button> */}
        <button onClick={() => apple()}>Click Me</button>
        </>
    );
};

export default User;