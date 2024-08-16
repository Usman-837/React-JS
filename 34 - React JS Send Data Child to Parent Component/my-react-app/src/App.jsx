import React from "react";
import User from "./User";

const App = () => {
  let data = "Muhammad Usman";

  // const parentAlert = (age) => {
  //   alert(age);
  // }

  const parentAlert = (age) => {
    console.log(age);
    alert(age.age1);
  }

  return(
    <>
    <h1>Send Data from Child to Parent Component</h1>
    {/* <User name={data}/> */}
    <User alert={parentAlert} />
    </>
  );
};

export default App;