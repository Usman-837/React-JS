import React, { useState } from "react";

const App = () => {
  const [val, setValue] = useState();
  const [item, setItem] = useState();

  return(
    <>
    <h1>Controlled Component</h1>
    {/* <input type="text" value="100"/> */}
    {/* <input type="text" value={val} onChange={(e)=>setValue(e.target.value)}/>
    <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/> */}

    <input type="text" defaultValue="Usman" onChange={(e)=>setValue(e.target.value)}/>
    <input type="text" defaultValue="Tufail" onChange={(e)=>setItem(e.target.value)}/>
    <h1>Value : {val}</h1>
    <h1>Item : {item}</h1>
    </>
  );
}

export default App;