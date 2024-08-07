import React from "react";

class Student extends React.Component{
    componentWillUnmount(){
        // alert("componentWillUnmount called");
        console.warn("componentWillUnmount called");
    }
    
    render(){
        return(
            <>
            <h1>Student Componnet</h1>
            </>
        );
    };
};

export default Student;