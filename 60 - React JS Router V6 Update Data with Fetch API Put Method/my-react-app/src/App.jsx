import React, { useEffect, useState } from "react";
import "./App.css"

const App = () => {
  
const [data, setData] = useState([])
const [id, setId] = useState("")
const [name, setName] = useState("")
const [title, setTitle] = useState("")

useEffect(() => {
  getList()
},[])

function getList(){
    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => 
    result.json()).then((res) => {
      // console.warn("result:", res)
    setData(res)
    setName(res[0].userId);
    setId(res[0].id);
    setTitle(res[0].title)
  } 
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

  function selectUser (id) {
    // console.warn(data[id]);
    // console.warn(data[id-1])
    // setId(data[id-1].userId)
    // setName(data[id-1].id)
    // setTitle(data[id-1].title)
    let item = data[id-1];
    console.warn(data[id-1]);
    setId(item.userId);
    setName(item.id);
    setTitle(item.title);
  }

  return (
    <>
    <h1 align="center">Delete User With API</h1>
    <div className="update">
    <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Title</th>
            <th>Operation</th>
          </tr>
        </thead>
        {
          data.map((item)=>
          <tbody>
            <tr>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td><button onClick={()=> deleteUser(item.id)}>Delete</button></td>
              <td><button onClick={()=> selectUser(item.id)}>Update</button></td>
            </tr>
          </tbody>
          )
        }
      </table>
      <br/>
      <div>
        <input type="text" value={id}/><br/><br/>
        <input type="text" value={name}/><br/><br/>
        <input type="text" value={title}/><br/><br/>
        <button>Update User</button>
      </div>
    </div>
    </>
  );
};

export default App;
