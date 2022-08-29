const MeuComponente = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.age),
    React.createElement("p", {}, props.isAlive.toString()),
  ]);
};

const App = React.createElement(
  "div",
  {},
  React.createElement(MeuComponente, {
    name: "Fernando",
    isAlive: true,
    age: 88,
  })
);

const root = document.getElementById("root");

ReactDOM.render(App, root);
