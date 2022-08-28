import { useState } from 'react'

export function MyState() {


  const [value, setValue] = useState("");
  
  console.log('my state', value)

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
    </div>
  );
}
