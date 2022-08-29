import { useState } from 'react'

export function MyFuncCounter() {
  
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>aumentar</button>
      <button onClick={decrement}>diminuir</button>
      <button onClick={reset}>resetar</button>
    </div>
  );
}
