import React, { useState } from 'react';
import Student from './Student';

function App() {
  const [name, setName] = useState("Usman");

  return (
    <>
    <Student name={name} age={"25"} email={"usman@gmail.com"} other={{address:"jhang", mobile:"123"}}/>
    <Student name={name} age={"20"} email={"usman@gmail.com"} other={{address:"Faisalabad", mobile:"456"}}/>
    <Student name={name} age={"19"} email={"usman@gmail.com"} other={{address:"Lahore", mobile:"789"}}/>
    <Student name={name} age={"18"} email={"usman@gmail.com"} other={{address:"Islamabad", mobile:"101"}}/>
    <button onClick={()=>{setName("Sufyan")}}>Update Name</button>
    {/* <Student name={"Sufyan"}/>
    <Student name={"Saboor"}/> */}
    </>
)
}

export default App;
