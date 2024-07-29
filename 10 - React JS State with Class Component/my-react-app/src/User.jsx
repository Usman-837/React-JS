import React, { Component } from "react";

// class User extends React.Component 
class User extends Component{

    constructor() {
        super();
        this.state={
            data:"Usman"
        }
    }
    apple(){
        // alert("Apple")
        // this.setState({data:"Tufail"})
        this.setState({data:this.state.data+1})
    }

    render(){
        return(
            <>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.apple()}>Update Data</button>
            </>
        );
    };
}

export default User;