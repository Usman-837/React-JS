import React from "react";
import "./style.css";
import  style from "./custom.module.css";

const App = () => {
  return(
    <>
    <h1 className="primary">Style Type One in React JS</h1>
    <h1 style={{backgroundColor: "blue", color: "white"}}>Style Type Two in React JS</h1>
    <h1 className={style.secondary}>Style Type Three in React JS</h1>
    </>
  );
};

export default App;