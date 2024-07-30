import React, { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [tnc, setTnc] = useState(false);

  const getFormData = (e) => {
    console.log(name, interest, tnc);
    e.preventDefault();
  }

  return (
    <>
    <form onSubmit={getFormData}>
      <input type="text" placeholder="enter the name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
      <select onChange={(e)=>setInterest(e.target.value)}>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
      </select><br/><br/>
      <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms and conditions</span><br/><br/>
      <button type="submit">Submit</button>
      <button type="reset">Clear</button>
    </form>
    </>
);
};

export default App;
