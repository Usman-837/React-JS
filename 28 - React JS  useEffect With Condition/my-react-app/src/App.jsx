import React, { useEffect, useState } from "react";
import User from "./User";

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  // useEffect(()=> {
  //   alert("Count : " + count);
  // },[count, data])
  
  // useEffect(()=> {
  //   alert("Count : " + count);
  // })

  // useEffect(()=>{
  //   console.warn("Data : " + data);
  // }, [data])
  
  return(
    <>
      <User Count={count} Data={data}/>
      <button onClick={()=>{setCount(count + 1)}}>Update Count</button>
      <button onClick={()=>{setData(data + 1)}}>Update Data</button>
    </> 
  );
};

export default App;