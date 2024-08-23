import React from "react";
import {BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Page404 from  "./Page404";
import User from "./User";

const App = () => {
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Page404/>}/>
      <Route path="/user/:name" element={<User/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;