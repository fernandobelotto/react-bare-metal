import { useRef } from 'react'

export function MyRef() {

  const ref = useRef("")

  console.log('ref value', ref.current.value)
  
  return (
    <div>
      <input ref={ref}></input>
    </div>
  );
}
