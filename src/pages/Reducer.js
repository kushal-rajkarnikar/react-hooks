import { useReducer } from "react";

// Reducer Hook

function reducer(state, action) {
  //switch case

  switch (action.type) {
    //if (action.type==="increment"){}
    case "increment":
      return state + 1;
    //else if (action.type==="decrement"){ }
    case "decrement":
      return state - 1;
    // else
    default: // else
      throw new Error();
  }
}

function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, 0);
  // const [stateVariable, setStateVariable] = React.useState({}l)

  return (
    <>
      Count: {state}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

export default function Reducer() {
  return (
    <>
      <h1>Reducer</h1>
      <p>
        The useReducer Hook is similar to the useState Hook. It allows for
        custom state logic. If you find yourself keeping track of multiple
        pieces of state that rely on complex logic, useReducer may be useful.
      </p>
      <ReducerDemo />
    </>
  );
}
