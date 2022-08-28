import { MeuCounter } from "./MeuComponente.js";

const App = React.createElement("div", {}, [
  React.createElement(MeuCounter),
]);

const root = document.getElementById("root");

ReactDOM.render(App, root);
