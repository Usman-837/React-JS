import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1)

  const updateCounter = () => {
    // setCount(count+1);
    // setCount(Math.random()*10)
    // setCount(Math.floor(Math.random()*10))
    // let rand = Math.floor(Math.random()*10)
    // setCount(rand)
    // setCount((pre) => {
    //   console.warn(pre)
      // return rand;
      // if(pre-rand<5)
      // {
      //   alert("topop")
      // }
      
    //   if(pre<5){
    //     alert("low value")
    //   }
    //   return rand;
    // })
     
    for(let i=0;i<5;i++)
    {
      // setCount(count+1)
      setCount((pre)=>pre+1)
    }
  }
  
  return(
    <>
    <h1>{count}</h1>
    <button onClick={updateCounter}>Update State</button>
    </>
  );
}

export default App