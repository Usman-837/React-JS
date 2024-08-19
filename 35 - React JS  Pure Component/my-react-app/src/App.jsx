import React from "react";
import User from "./User";

// class App extends React.Component{
  class App extends React.PureComponent{
  constructor() {
    super();
    this.state={
      count:1
    }
  }
  render()
  {
    // console.warn("checking rerendering");
    return(
      <>
        {/* <h1>Pure Component {this.state.count}</h1> */}
        <User count={this.state.count}/>
        {/* <button onClick={() => this.setState({count:this.state.count+1})}>Update Count</button> */}
        <button onClick={()=>this.setState({count:1})}>Update Count</button>
      </>
    );
  }
};

export default App;