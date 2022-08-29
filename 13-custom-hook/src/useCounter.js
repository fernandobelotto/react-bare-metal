import { useState } from "react";
export default function mycounter() {
  
    const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);

  return {
    counter,
    increase,
  };
}
