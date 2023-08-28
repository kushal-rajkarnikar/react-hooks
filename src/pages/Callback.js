import { useState, useCallback } from "react";
import Todo from "./Todo";

export default function Callback() {
  return (
    <>
      <h1>Callback</h1>
      <p>
        The React useMemo Hook returns a memoized value. It only runs when on of
        its dependencies update. This can improve performance The useMemo and
        useCallback Hooks are similar. The main difference is that useMemo
        returns a memoized value and useCallback returns a memoized function.
      </p>
      <br />
      <CallBackDemo />
    </>
  );
}

function CallBackDemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todo todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
