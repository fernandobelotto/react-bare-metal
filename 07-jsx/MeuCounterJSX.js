import React from "react";

export const MeuCounterJSX = () => {
  const [counter, setCounter] = React.useState(2);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>aumentar</button>
      <button onClick={() => setCounter(counter - 1)}>diminuir</button>
    </div>
  );
};
