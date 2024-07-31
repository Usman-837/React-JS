import React from "react";
import User from "./User";
import Member from "./Member";

function App() {
  
  const getData = () => {
      alert("Hi This is a function as props");
  }

  return (
    <>
      <User data={getData}/>
      <Member data={getData}/>
    </>
  );
};

export default App;
