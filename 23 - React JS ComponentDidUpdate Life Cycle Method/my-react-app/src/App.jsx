import React from "react";

class App extends React.Component{
  constructor(){
    super();
    // this.state={
    //   name: "Usman"
    // }

      this.state={
        count : 0
      }
    console.warn("constructor");
  }
  componentDidUpdate(preProps, preState, snapshot){
    // console.warn("componentDidUpdate", preState.count, this.state.count);
    console.warn("componentDidUpdate", snapshot);
    if(preState.count === this.state.count){
      alert("Data is already same");
    }

    // this.setState({count:this.state.count+1});
  }
  render(){
    // console.warn("render");
    return(
      <>
        {/* <h1>Component Did Update {this.state.name}</h1>
        <button onClick={()=>{this.setState({name: "Sufyan"})}}>Update Name</button> */}
        <h1>Component Did Update {this.state.count}</h1>
        {/* <button onClick={()=>{this.setState({count: this.state.count+1})}}>Update State</button> */}
        <button onClick={()=>{this.setState({count:1})}}>Update State</button>
      </>
    );
  };
};

export default App;