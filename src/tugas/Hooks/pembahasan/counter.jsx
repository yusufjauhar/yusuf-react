import { useState } from "react";

const Counter = () => {
  let [Count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(Count - 1)}>-</button>
      <span> {Count} </span>
      <button onClick={() => setCount(Count + 1)}>+</button>
    </div>
  );
};

export default Counter;
