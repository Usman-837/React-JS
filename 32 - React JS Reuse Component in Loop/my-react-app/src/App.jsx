import React from "react";
import User from "./User";

const App = () => {

  const users = [
    {name: "Usman", email: "usman@gmai.com", contact: "1111"},
    {name: "Sufyan", email: "sufyan@gmai.com", contact: "2222"},
    {name: "Ahmad", email: "ahmad@gmai.com", contact: "3333"},
    {name: "Ayan", email: "ayan@gmai.com", contact: "4444"},
  ];

  return(
    <>
    <h1>Reuse of component in Loop</h1>
    {
      users.map((item) =>
        <User data={item}/>
    )
    }
    </>
  );
};

export default App;