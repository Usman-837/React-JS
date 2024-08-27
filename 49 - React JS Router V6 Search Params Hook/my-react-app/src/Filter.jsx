import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {

    const [searchParams , setSearchParams] = useSearchParams();
    console.log(searchParams.get("Age"));
    console.log(searchParams.get("City"));
    const age = searchParams.get("age");
    const city = searchParams.get("city");

    return(
        <>
        <h1>useSearchParams Hook</h1>
        <h1>Age: {age}</h1>
        <h1>City: {city}</h1>
        <button onClick={()=>setSearchParams({age: "25"})}>Set Age in searchParams</button>
        <input type="text" onChange={(e)=>setSearchParams({text:e.target.value,age:"26"})} placeholder="Enter the Text"/>
        </>
    );
}

export default Filter;