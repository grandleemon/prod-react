import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <button onClick={() => setCounter(counter - 1)}>decrement</button>
    </div>
  );
};

export default Counter;
