import React from "react";

const User = () => {
    // return React.createElement("h1",null,"Hello User");        HTML and JS without JSX
    // return React.createElement("div",null, "Hello User");
    return React.createElement("div",null,React.createElement("h1",null,"Hello inner tag"));
};

export default User;