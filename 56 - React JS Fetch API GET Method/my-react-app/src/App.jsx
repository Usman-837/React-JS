import React, { useEffect, useState } from "react";

const App = () => {
  
  const[data, setData] = useState([])

  useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/todos")
      .then((result) => result.json())
      .then((res) => 
      // console.warn("result:", res)
      {setData(res)}
    )},[]
  )
  return (
    <>
      <table border="1">
      <caption><b>Fetch API Get Method</b></caption>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Title</th>
        </tr>
        {
          data.map((item)=>
          <tr>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
          </tr>
          )
        }
      </table>
    </>
  );
};

export default App;
