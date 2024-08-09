import React from "react";

const App = () => {

    const Students = [
      {name: "Usman", email: "usman@gmail.com", phone: "0310"},
      {name: "Ahmad", email: "ahmad@gmail.com", phone: "0312"},
      {name: "Sufyan", email: "sufyan@gmail.com", phone: "0313"},
      {name: "Ali", email: "Ali@gmail.com", phone: "0314"}
    ];

    // Students.map((item)=> {
    //   console.warn(item);
    // });

    // for(var i=0; i < Students.length; i++){
    //   console.error(Students[i]);
    // }

  return(
    <>
    <h1>Array Listing with Map Method</h1>
     {
        // Students.map((item)=> <h1>Name : {item}</h1>)
        //      for(var i=0; i < Students.length; i++){
        //   console.error(Students[i]);
        // }

      <table border="1">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {
          Students.map((data) => 
            <tr key={data}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
            </tr>
          )
        }
      </table>
     }
    </>
  );
};

export default App;