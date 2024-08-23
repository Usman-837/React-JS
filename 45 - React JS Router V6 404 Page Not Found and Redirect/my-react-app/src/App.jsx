import React from "react";
import {BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Page404 from  "./Page404";

const App = () => {
  return(
    <>
    <BrowserRouter>
    {/* <Link to="/about">About</Link><br/>
    <Link to="/">Home</Link> */}
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      {/* <Route path="*" element={<h1>404 Page</h1>}/> */}
      <Route path="*" element={<Page404/>}/>
      {/* <Route path="*" element={<Navigate to="/"/>}/> */}
    </Routes>
    {/* <Navbar/> */}
    </BrowserRouter>
    </>
  );
}

export default App;