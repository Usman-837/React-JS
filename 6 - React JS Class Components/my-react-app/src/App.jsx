import React,{Component} from 'react';
import User from './User';

function App() {

  function Apple() {
    return(
      <>
      <h2>Nested Component</h2>
      </>
    );
  };

  return (
    <>
    {/* <User></User> */}
    <User/>
    {/* {Apple()} */}
    <Apple/>
    </>
  )
}

// class User extends Component {
//     render(){
//         return(
//             <>
//             <h1>Class Component</h1>
//             </>
//         );
//     };    
// };

export default App;
