import { useState } from "react";
export function StateNumber() {
  const [counter, setCounter] = useState(0);

  console.log("typeof", typeof counter);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase!</button>
    </>
  );
}
