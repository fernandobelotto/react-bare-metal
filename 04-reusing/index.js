const MeuComponente = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.age),
    React.createElement("p", {}, props.isAlive.toString()),
  ]);
};

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
