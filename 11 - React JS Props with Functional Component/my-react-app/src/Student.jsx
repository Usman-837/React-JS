import React from "react";

const Student = (prop) => {
    
    console.log(prop);
    return(
        <>
        {/* <h1>Prop with functional component</h1> */}
        <h1>Hi : {prop.name} {prop.age}</h1>
        <h1>Email : {prop.email}</h1>
        <h1>Address : {prop.other.address}</h1>
        <h1>Phone : {prop.other.mobile}</h1>
        {/* <h1>Age : {prop.age}</h1> */}
        </>
    );
};

export default Student;