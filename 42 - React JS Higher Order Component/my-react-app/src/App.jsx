import React, { useState } from "react";

const App = () => {
  return(
    <>
    <h1>Higher Order Component</h1>
    {/* <Counter cmp={Counter}/> */}
    <HOCRed cmp={Counter}/>
    <HOCGreen cmp={Counter}/>
    <HOCBlue cmp={Counter}/>
    </>
  );
}

const HOCRed = (props) => {
  return <h2 style={{backgroundColor:"red", width:"10%", textAlign:"center"}}>Red<props.cmp/></h2>
}
const HOCGreen = (props) => {
  return <h2 style={{backgroundColor:"green", width:"10%", textAlign:"center"}}>Green<props.cmp/></h2>
}
const HOCBlue = (props) => {
  return <h2 style={{backgroundColor:"blue", width:"10%", textAlign:"center"}}>Blue<props.cmp/></h2>
}

const Counter = () => {
  const [count, setCount] = useState(0);
  return(
    <>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>Update</button>
    </>
  );
}

export default App;