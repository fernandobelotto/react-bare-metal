import React from "react";
import ReactDOM from "react-dom";

import { MeuCounter } from "./MeuCounter.js";
import { MeuCounterJSX } from "./MeuCounterJSX.js";

const App = () => {
  return (
    <div>
      <MeuCounter/>
      <MeuCounterJSX/>
    </div>
  )
}

const root = document.getElementById("root");

ReactDOM.render(<App/>, root);
