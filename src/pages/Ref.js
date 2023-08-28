import { useRef } from "react";

export default function Ref() {
  //Ref Hooks
  // const [stateVariable, setStateVariable] = React.useState("Kushal")
  const count = useRef(0);
  // const [state, setState] = React.useState(0)

  function handleClick() {
    count.current++;
    console.log(count);
  }

  return (
    <>
      <h1>useRef</h1>
      <p>
        The useRef Hook allows you to persist values between renders. It can be
        used to store a mutable value that does not cause a re-render when
        updated.
      </p>
      <button onClick={handleClick}>Count = {count.current}</button>
    </>
  );
}
