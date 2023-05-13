import React, {useState} from 'react'
import "./Counter.scss"

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      Counter: {counter}
      <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCounter(prev => prev -1)}>Decrement</button>
    </div>
  );
};
