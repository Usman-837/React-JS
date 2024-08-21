import React,{forwardRef} from "react";

const User = (prop, ref) => {
    return(
        <>
        <input type="text" ref={ref}/>
        </>
    );
}

export default forwardRef(User);