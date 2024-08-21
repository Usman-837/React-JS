import React, { useRef } from "react";

const App = () => {

const inputRef = useRef(null);
const inputRef2 = useRef(null);

const submitForm = (e) => {
  e.preventDefault();
  console.warn("input field 1 value : ", inputRef.current.value)
  console.warn("input field 2 value : ", inputRef2.current.value)
  let input3 = document.getElementById("input3").value
  console.warn("input field 3 value : ", input3)
}

  return(
    <>
    <h1>Uncontrolled Component</h1>
    <form onSubmit={submitForm}>
      <input ref={inputRef} type="text"/><br/><br/>
      <input ref={inputRef2} type="text"/><br/><br/>
      <input type="text" id="input3"/><br/><br/>
      <button>Submit</button>
    </form>
    </>
  );
}

export default App;