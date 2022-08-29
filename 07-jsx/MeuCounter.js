import React from 'react'

export const MeuCounter = () => {

  const [counter, setCounter] = React.useState(2)

  return React.createElement("div", {}, [
    React.createElement("h1", {}, counter),
    React.createElement("button", {
      onClick: () => setCounter(counter + 1)
    }, "aumentar"),
    React.createElement("button", {
      onClick: () => setCounter(counter - 1)
    }, "diminuir"),
  ]);
};
