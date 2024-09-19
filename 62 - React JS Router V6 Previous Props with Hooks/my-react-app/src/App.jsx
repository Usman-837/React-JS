import React, { useState } from "react"
import User from "./User"

const App = () => {
  
  const [count, setCount] = useState(0)

  return(
    <>
      <User count={count}/>
      {/* <button onClick={()=> setCount(count+1)}>Update Counter</button> */}
      <button onClick={() => setCount(Math.floor(Math.random()*10))}>Update Counter</button>
    </>
  )
}

export default App