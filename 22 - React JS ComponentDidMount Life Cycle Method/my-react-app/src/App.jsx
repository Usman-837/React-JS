import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      name: "Usman"
    }
    console.warn("constructor");
  }
  componentDidMount(){
    console.warn("componentDidMount");
  }
  render(){
    console.warn("render");
    return(
      <>
        <h1>Component Did Mount {this.state.name}</h1>
        <button onClick={()=>{this.setState({name: "Sufyan"})}}>Update Name</button>
      </>
    );
  };
};

export default App;