import { memo, useCallback, useState } from "react";

export default function Example1() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increase = useCallback(() => setCounter(counter + 1), [counter]);
  const increase2 = useCallback(() => setCounter2(counter2 + 1), [counter2]);

  return (
    <>
      <Counter counter={counter} increase={increase} number="1" />
      <Counter counter={counter2} increase={increase2} number="2" />
    </>
  );
}

const Counter = memo(({ counter, increase, number }) => {
  console.log("rendering counter", number);

  return (
    <>
      <button onClick={increase}>{counter}</button>
    </>
  );
});
