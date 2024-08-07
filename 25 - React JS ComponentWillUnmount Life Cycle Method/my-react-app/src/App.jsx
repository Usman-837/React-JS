import React from "react";
import Student from "./Student";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      show:true
    }
  }
  
  render(){
    return(
      <>
      {
        this.state.show ? <Student/> : <h1>Student Component Removed</h1>
      }
      <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Child Component</button>
      </>
    );
  };
};

export default App;