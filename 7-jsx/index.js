import React from "react";
import ReactDOM from "react-dom";

import { MeuCounter } from "./MeuCounter.js";
import { MeuCounterJSX } from "./MeuCounterJSX.js";

const App = React.createElement("div", {}, [
  React.createElement(MeuCounter),
  React.createElement(MeuCounterJSX),
]);

const root = document.getElementById("root");

ReactDOM.render(App, root);
