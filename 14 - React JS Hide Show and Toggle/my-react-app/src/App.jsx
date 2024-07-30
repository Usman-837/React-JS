import React, { useState } from 'react';

function App() {

const [status, setStatus] = useState(true);

  return (
    <>
    {
      status?<h1>Hi Usman</h1>:null 
    }
  {/* <button onClick={()=> setStatus(false)}>Hide</button>
    <button onClick={()=> setStatus(true)}>Show</button> */}

    <button onClick={()=> setStatus(!status)}>Toggle</button>
    </>
);
};

export default App;
