import React from "react";

class App extends React.Component{
  constructor(){
    super();
    console.log("Hi This is Constructor");
    this.state={
      name: "Usman"
    }
  }
  
  render(){
    console.log("Hi this is Render");
    return(
      <>
        <h1>Hi {this.state.name}</h1>
      </>
    );
  }
}

export default App;
