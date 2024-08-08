import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    console.log("useEffect Hook");
  })
  useEffect(()=> {
    console.warn("useEffect Hook");
  })
  
  return(
    <>
      <h1>useEffect Hook {count}</h1>
      <button onClick={()=>{setCount(count + 1)}}>Update State</button>
    </> 
  );
};

export default App;