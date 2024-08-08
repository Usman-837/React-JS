import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState("Usman");
  
  return(
    <>
      <h1>{data}</h1>
      <button onClick={()=>{setData("Tufail")}}>Update State</button>
    </>
  );
};

export default App;