import { useState } from "react";
export function StateBool() {
  const [checked, setChecked] = useState(false);

  console.log("typeof", typeof checked);

  return (
    <>
      <h1>{checked.toString()}</h1>
      <input type='checkbox'

        onChange={e => setChecked(e.target.checked)}
      />
    </>
  );
}
