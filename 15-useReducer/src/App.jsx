import { useReducer } from "react";

const initialState = { counter: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { counter: state.counter + 1 };
    case "reset":
      return { counter: 0 };
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Use Reducer</h1>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: "add" })}>adicionar</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}
