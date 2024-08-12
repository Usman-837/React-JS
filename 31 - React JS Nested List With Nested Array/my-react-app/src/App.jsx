import React from "react";

const App = () => {
  const users = [{name: "Usman", email: "usman@gmail.com", address: [
    {Hn: "10", city: "Jhang", country: "Pakistan"},
    {Hn: "12", city: "Fsd", country: "Pakistan"},
    {Hn: "13", city: "Lahore", country: "Pakistan"},
    {Hn: "14", city: "Multan", country: "Pakistan"}, 
  ]},
  {name: "Sufan", email: "sufyan@gmail.com", address: [
    {Hn: "15", city: "Jhang", country: "India"},
    {Hn: "16", city: "Fsd", country: "India"},
    {Hn: "17", city: "Lahore", country: "India"},
    {Hn: "18", city: "Multan", country: "India"}, 
  ]},
  {name: "Ahmad", email: "ahmad@gmail.com", address: [
    {Hn: "19", city: "Jhang", country: "UK"},
    {Hn: "20", city: "Fsd", country: "UK"},
    {Hn: "21", city: "Lahore", country: "Uk"},
    {Hn: "22", city: "Multan", country: "UK"}, 
  ]}];
  
  return(
    <>
    <h1>List With Nested Array</h1>
    <table border={1} cellPadding={10} cellSpacing={20}>
      <tbody>
        <tr>
          <td>S.N</td>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </tbody>  
      {
        users.map((item, i)=>
        <tr>
          <td>{i + 1}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>
            <table border={1}>
              <tbody>
                {
                  item.address.map((data) => 
                    <tr>
                      <td>{data.Hn}</td>
                      <td>{data.city}</td>
                      <td>{data.country}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </td>
        </tr>
        )
      }
    </table>
    </>
  );
};

export default App;