import React, { useState } from 'react';

function App() {
const [data, setData] = useState(null);
const [print, setPrint] = useState(false);

  const getData = (val) => {
    // console.log(val.target);
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <>
    {
        print? <h1>{data}</h1> :null
    }
    
    <input type="text" onChange={getData}/>
    <button onClick={()=>setPrint(true)}>Print Data</button>
    </>
);
};

export default App;
