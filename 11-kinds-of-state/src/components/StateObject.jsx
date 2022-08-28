import { useState } from "react";

export function StateObject() {
  const [obj, setObj] = useState({
    user: {
      name: "fernando",
      age: 88,
      isAlive: true,
    },
  });

  const [secondState, setSecondState] = useState("fernando")

  console.log("state object", obj);

  const handleClick = () => {
    const newObject = Object.assign({}, obj);
    newObject.user.age++;
    setObj(newObject);
  };

  return (
    <>
      <code>{JSON.stringify(obj)}</code>
      <button onClick={handleClick}>set property</button>
      <OtherComponent name="fernando" />
    </>
  );
}

function OtherComponent({ name }) {
  console.log("rendering other component", name);
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}
