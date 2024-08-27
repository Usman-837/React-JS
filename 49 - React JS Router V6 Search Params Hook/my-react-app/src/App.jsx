import React from "react";
import {BrowserRouter} from "react-router-dom";
import Filter from "./Filter";


const App = () => {
  return(
    <>
    <BrowserRouter>
        <Filter/>
    </BrowserRouter>
    </>
  );
}

export default App;