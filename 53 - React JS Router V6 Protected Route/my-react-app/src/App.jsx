import React from "react";
import {BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Page404 from  "./Page404";
import User from "./User";
import Login from "./Login";
import Protected from "./Protected";


const App = () => {
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Protected Component={Home}/>}/>
      <Route path="/login" element={<Protected Component={Login}/>}/>
      <Route path="/about" element={<Protected Component={About}/>}/>
      <Route path="*" element={<Page404/>}/>
      <Route path="/user/:name" element={<Protected Component={User}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;