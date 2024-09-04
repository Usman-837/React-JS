import React from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import User from "./User";

const App = () => {
  const users = [
    {id: 1, name: "Usman", email: "usman@gmail.com"},
    {id: 2, name: "Sufyan", email: "sufyan@gmail.com"},
    {id: 3, name: "Umair", email: "umair@gmail.com"},
    {id: 4, name: "Ayan", email: "usman@gmail.com"},
  ]
  return(
    <>
    <h1>Routing V6 Dynamic Routing</h1>
      {/*  vusers.map((item)=><a href={"/user/"+item.id}><h1>{item.name}</h1></a>)  */}
        <BrowserRouter>
            {
                users.map((item)=><NavLink to={"/user/"+item.id+"/"+item.name}><h1>{item.name}</h1></NavLink>) 
            }
            <Routes>
              <Route path="/user/:id/:name" element={<User/>}/>
            </Routes>
        </BrowserRouter>  
    </>
  );
}

export default App;