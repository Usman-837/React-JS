import React from "react";

class User extends React.Component{
    constructor()
    {
        super();
        this.state={
            email:"usman@gmail.com"
        }
    }
    render(){
        // console.log("Render Method", this.props);
        console.log("Render Method");
        console.log("Your Email : ", this.state.email)
        return(
            <>
                {/* <h1>Hi {this.props.name}</h1> */}
                <h1>User Component</h1>
                <button onClick={()=> this.setState({email:"sufyan@gmail.com"})}>Updata Email</button>
            </>
        );
    };
};

export default User;
