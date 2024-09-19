import React, { useState } from "react";

const App = () => {

  const [data, setData] = useState({name: "Usman", age: "25"})

  return(
    <>
      <h1>State With Object</h1>
      {/* <input type="text" placeholder="enter name" value={data.name} onChange={(e) => {setData({age:data.age, name:e.target.value})}}/>
      <input type="text" placeholder="enter age" value={data.age} onChange={(e) => {setData({name:data.name, age:e.target.value})}}/> */}
      <input type="text" placeholder="enter name" value={data.name} onChange={(e) => {setData({...data, name:e.target.value})}}/>
      <input type="text" placeholder="enter age" value={data.age} onChange={(e) => {setData({...data, age:e.target.value})}}/>
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
    </>
  )
}

export default App