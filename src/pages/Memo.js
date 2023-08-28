import { useMemo, useState } from "react";

export default function Memo() {
  const [count, setCount] = useState(60);

  const expensiveCount = useMemo(() => {
    return count ** 2;
  }, [count]);

  return (
    <>
      Current value of expensiveCount: {expensiveCount}
      <br />
    </>
  );
}
