import React, { useEffect, useState } from "react";

const App = () => {
  
const [data, setData] = useState([])

useEffect(() => {
  getList()
},[])

function getList(){
  fetch("https://jsonplaceholder.typicode.com/todos").then((result) => 
  result.json()).then((res) => 
  // console.warn("result:", res)
  {setData(res)}
)
}

  useEffect(()=>{},[]
  )

  function deleteUser(id){
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
      method: 'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        getList();
      })
    })
  }

  return (
    <>
      <table border="1">
      <caption><b>Fetch API Get Method</b></caption>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Title</th>
          <th>Operation</th>
        </tr>
        {
          data.map((item)=>
          <tr>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td><button onClick={()=> deleteUser(item.id)}>Delete</button></td>
          </tr>
          )
        }
      </table>
    </>
  );
};

export default App;
