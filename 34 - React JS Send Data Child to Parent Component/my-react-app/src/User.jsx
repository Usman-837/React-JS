import React from "react";

const User = (props) => {
    // const age = "25";
    const age = {age1: "20", age: "21", age: "22"}
    return(
        <>
        {/* <button onClick={()=> alert(props.alert)}>Click Me</button> */}
        <button onClick={()=> props.alert(age)}>Click Me</button>
        </>
    );
};

export default User;