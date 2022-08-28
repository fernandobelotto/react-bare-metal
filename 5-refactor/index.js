import { MeuComponente } from "./MeuComponente.js";

const App = React.createElement("div", {}, [
  React.createElement(MeuComponente, {
    name: "Fernando",
    isAlive: true,
    age: 88,
  }),
  React.createElement(MeuComponente, {
    name: "João",
    isAlive: false,
    age: 90,
  }),
  React.createElement(MeuComponente, {
    name: "Maria",
    isAlive: true,
    age: 20,
  }),
]);

const root = document.getElementById("root");

ReactDOM.render(App, root);
