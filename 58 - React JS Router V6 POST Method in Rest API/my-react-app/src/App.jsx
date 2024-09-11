import React, { useState } from "react";

const App = () => {


  const [user , setUser] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  const saveUser = () => {
    console.warn(user, title, status);
    let data = {user, title, status}
    fetch("https://jsonplaceholder.typicode.com/todos",{
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content':'application/json' 
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      // console.warn("result", result);
      result.json().then((resp)=> {
        console.warn("resp", resp)
      })
    })
  }

  return(
    <>
    <h1>Fetch API POST Method</h1>
    <input type="text"  value={user} name="userId" placeholder="Enter User Id" onChange={(e)=> setUser(e.target.value)}/><br/><br/>
    <input type="text" value={title} name="title" placeholder="Enter Title" onChange={(e)=> setTitle(e.target.value)}/><br/><br/>
    <input type="text" value={status} name="completed" placeholder="Enter Status" onChange={(e)=> setStatus(e.target.value)}/><br/><br/>
    <button type="button" onClick={saveUser}>Save New User</button>
    </>
  );
}

export default App