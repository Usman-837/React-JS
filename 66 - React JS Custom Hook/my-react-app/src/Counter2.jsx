import React from "react";
import useCounter from "./useCounter";

const Counter2 = () => {

    const [count, Increment, Decrement] = useCounter(10)

    return(
        <>
            <div>{count}</div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </>
    )
}

export default Counter2