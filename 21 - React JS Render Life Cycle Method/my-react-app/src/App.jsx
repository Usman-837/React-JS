import React, { useState } from "react";
import User from "./User";

const App = () => {
  // const [name, setnName] = useState("Usman");
  
  return(
    <>
    {/* <User name={name}/> */}
    {/* <button onClick={()=>setnName("Sufayn")}>Update Name</button> */}
    <User/>
    </>
  );
};

export default App;