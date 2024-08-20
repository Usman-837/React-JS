import React, { createRef } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.inpurRef = createRef();
  }

  componentDidMount(){
  // console.warn(this.inpurRef);
  // console.warn(this.inpurRef.current.value="1000");    
  }

  getVal(){
    console.warn(this.inpurRef.current.value);
    this.inpurRef.current.style.color="red";
    this.inpurRef.current.style.backgroundColor="green"
  }

  render() {
    return(
      <>
      <h1>Ref with class component</h1>
      <input type="text" ref={this.inpurRef}/>
      <button onClick={()=>this.getVal()}>check Ref</button>
      </>
    );
  }
}

export default App;