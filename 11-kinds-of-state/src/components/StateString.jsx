import { useState } from "react";
export function StateString() {
  const [name, setName] = useState("");

  console.log("typeof", typeof name);

  return (
    <>
      <h1>{name}</h1>
      <input value={name} onChange={(e)=>setName(e.target.value)}/>
    </>
  );
}
