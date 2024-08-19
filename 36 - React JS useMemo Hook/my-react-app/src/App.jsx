import React, { useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(1);


  // const multiCount = () => {
  //   console.log("multiCount Function callled");
  //   return(
  //     <>
  //     {count*10}
  //     </>
  //   );
  // }

  
  const multicount = useMemo(()=>{
    console.log("multiCount Function callled");
    return(
      <>
      {count*10}
      </>
    );
  },[count]); 



  return(
    <>
    <h1>useMemo Hook</h1>
    <h1>{count}</h1>
    <h1>{item}</h1>
    <h1>{multicount}</h1>
    <button onClick={()=> setCount(count+1)}>Update count</button>
    <button onClick={()=> setItem(item*10)}>Update Item</button>
    </>
  );
};

export default App;