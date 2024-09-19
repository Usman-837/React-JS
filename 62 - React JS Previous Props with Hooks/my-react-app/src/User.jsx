import React, { useEffect, useRef } from "react";

const User = (props) => {

    const lastValue = useRef();

    useEffect(() => {
        lastValue.current = props.count
    })

    const previusProps = lastValue.current

    return(
        <>
            {/* <h1>Current Value {props.count}</h1>
            <h1>Previus Value {previusProps}</h1> */}

            <h1>Difference {props.count - previusProps}</h1>
        </>
    )
}

export default User