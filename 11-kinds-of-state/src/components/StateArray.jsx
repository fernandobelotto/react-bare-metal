import { useState } from "react";

export function StateArray() {
  const [array, setArray] = useState([1, 2, 3]);

  console.log("state array", array);

  const handleClick = () => {
    const newArray = [...array, 5]
    setArray(newArray)
  };

  return (
    <>
      <button onClick={handleClick}>add item</button>
      <ul>
        {array.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}
