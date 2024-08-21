import React, { useRef } from "react";
import User from "./User";

const App = () => {
let inputRef = useRef(null);

const handleReff = () => {
  inputRef.current.value="1000"
  inputRef.current.style.color="green"
  inputRef.current.focus()
}

  return(
    <>
    <h1>forwardRef Hook</h1>
    <User ref={inputRef}/>
    <button onClick={handleReff}>Update Data</button>
    </>
  );
}

export default App;