import React, { useRef } from "react";

const App = () => {
  let inputRef = useRef(null);

  function handleInput(){
    console.warn("function call");
    // inputRef.current.value="1000";
    // inputRef.current.focus();
    // inputRef.current.style.color="red";
    inputRef.current.style.display="none";
  }

  return(
    <>
      <h1>useRef Hook in React JS</h1>
      <input type="text" ref={inputRef}/>  
      <button onClick={handleInput}>Handle Input</button>
    </>
  );
}

export default App;