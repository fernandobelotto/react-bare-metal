export const MeuComponente = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.age),
    React.createElement("p", {}, props.isAlive.toString()),
  ]);
};
