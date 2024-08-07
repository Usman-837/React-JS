import React from "react";

class App extends React.Component{
    constructor(){
      super();
      this.state={
        count:0
      }
    }
    shouldComponentUpdate(){
      console.warn("shouldComponentUpdate", this.state.count);
      // return false by default
      if(this.state.count > 5 && this.state.count < 10){
        return true;
      }
    }

  render() {
    return (
      <>
      <h1>Should Component Update {this.state.count}</h1>
      <button onClick={()=>{this.setState({count: this.state.count+1})}}>Update State</button>
      </>
    )
  }
}


export default App;