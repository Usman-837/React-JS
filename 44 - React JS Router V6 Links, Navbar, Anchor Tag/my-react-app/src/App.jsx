import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";

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
    </Routes>
    {/* <Navbar/> */}
    </BrowserRouter>
    </>
  );
}

export default App;