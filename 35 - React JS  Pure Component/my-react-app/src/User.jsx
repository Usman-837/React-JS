import React from "react";

class User extends React.PureComponent{
    render()
    {
        console.log("user component check rerendering");
        return(
            <>
            <h1>User Component {this.props.count}</h1>
            </>
        );
    }
}

export default User;